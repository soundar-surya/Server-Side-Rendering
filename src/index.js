import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/Routes';

const app = express();

app.use(express.static('public'));

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
        proxyReqOptDecorator(opts){
            opts.headers['x-forwarded-host'] = 'localhost:3000';
            return opts;
        }
}) );

app.get('*', (req, res) => {

    const store = createStore(req);
    const promises = matchRoutes(Routes, req.path)
        .map( ( { route } ) => route.loadData ? route.loadData(store) : null)
        .map( promise => {
            if(promise){
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve)
                } );
            }
        } );

    Promise.all(promises)
    .then(() =>{ 
        //context object
        const context = {};
        const content = renderer(req, store, context);
        
        //to handle redirects in server side rendering(static router)use context object. 
        if(context.url){
            return res.redirect(301, context.url);
        } 
        if(context.notFound) {
            res.status(404)
        }

    res.send(content); 
    } )
    .catch(e => console.log(e));
    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
