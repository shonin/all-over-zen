"use strict";

let path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    StyleLintPlugin = require("stylelint-webpack-plugin");

const extractSass = new ExtractTextPlugin('dist/[name]');

const lintSass = new StyleLintPlugin({
    syntax: "scss",
    configFile: ".stylelintrc"
});

module.exports = {
    entry: {
        "js/index.bundle.js": "./js/index.js",
        "css/index.css": "./scss/global.scss",
    },
    devtool: process.env.NODE_ENV === 'production' ? "#hidden-source-map" : "#inline-source-map",
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: [
                                "scss",
                                "node_modules/"
                            ],
                            sourceMap: true,
                            outputStyle: "expanded"
                        }
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    output: {
        filename: "dist/[name]"
    },
    plugins: [
        extractSass,
        lintSass
    ],
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
