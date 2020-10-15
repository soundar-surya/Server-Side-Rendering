const express = require('express');
const React = require('react');
const renderToStrings = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();

app.get('/', (req, res) => {
    const content = renderToStrings(<Home />);
    res.send(content);
});

app.listen(3000);