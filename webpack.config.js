const path = require('path');
const isProduction = process.env.NODE_ENV == "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const stylesHandler = MiniCssExtractPlugin.loader; 

const config = { //this is module export variable
    entry: ['./src/index.ts', './src/scss/style.scss'],
    target: ['web', 'es6'],
    output: {
        path: path.resolve(__dirname, "public"),
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss']
    },

    devServer: {
        open: true,
        host: "localhost",
        port: 8081, //due to vpn , increment if error 
        compress: true,
      },

    plugins : [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module : {
        rules : [
            {
                test: /\.(ts|tsx)$/i, // check if the file is ts
                loader: 'ts-loader',
                exclude: ["/node_modules/"],
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.(scss|css)$/,
                exclude : '/node_modules/',
                use: [stylesHandler, "css-loader", "postcss-loader", 'sass-loader'],
              },
        ]
    }
}


module.exports = () => {

    if (isProduction) {
        config.mode = "production";
        config.output.filename = 'bundle.js';

        config.optimization = {
            minimize: true
        };
    } else {
        config.mode = "development";
        config.devtool = "eval-source-map"; // for the minified to open the code directly
        config.output.filename = "bundle.js";
        
    }
    return config;
};