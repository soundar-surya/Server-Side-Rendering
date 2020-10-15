const path = require('path');

module.exports = {
        //Inform webpack that we're building a bundle
        // for nodeJS, rather than for the browser
        target: 'node',

        //root file of our server application
        entry: './src/index.js',

        //Tell  webpack where to put the output file
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build')
        },

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

