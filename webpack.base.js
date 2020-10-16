
module.exports = {
     //Tell webpack to run babel on every files it runs through
     module: {
        rules:[
            {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }
        ]
    }
};