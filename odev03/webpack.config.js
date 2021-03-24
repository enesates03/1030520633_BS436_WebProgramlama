const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

    entry: './src/app.jsx',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'public'),
        libraryTarget: "var",
        library: "CardGame"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        contentBase: './public',
        injectClient: false
    },
    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin ({
                extractComments:false
            })
        ]
    }
}