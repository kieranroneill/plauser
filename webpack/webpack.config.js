import HtmlWebpackPlugin from 'html-webpack-plugin';
import {  resolve } from 'path';
import webpack from 'webpack';

// Common.
import { alias, entry, extensions, loaders, output, plugins, srcPath, title } from './common.config';

export default {
    devtool: false,

    entry,

    module: {
        rules: loaders
    },

    output,

    plugins: plugins.concat([
        new HtmlWebpackPlugin({
            bundle: 'options.js',
            favicon: resolve(srcPath, 'favicon.png'),
            filename: 'options.html',
            inject: false,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyJS: true,
                minifyCSS: true
            },
            styles: 'styles.css',
            template: resolve(srcPath, 'templates', 'options.hbs'),
            title: `${title} Options`,
        }),
        new HtmlWebpackPlugin({
            bundle: 'background.js',
            filename: 'background.html',
            inject: false,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyJS: true,
                minifyCSS: true
            },
            template: resolve(srcPath, 'templates', 'background.hbs')
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            },
            sourceMap: true,
            mangle: true
        })
    ]),

    resolve: {
        alias,
        extensions
    }
};
