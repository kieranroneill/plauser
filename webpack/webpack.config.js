import CleanPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

export const distPath = join(__dirname, '..', 'dist');
export const srcPath = join(__dirname, '..', 'src');
const title = 'Plauser';
const uriLimit = 50000; // 50kb

export default {
    devtool: false,

    entry: {
        background: resolve(srcPath, 'background.js'),
        options: resolve(srcPath, 'options.js')
    },

    module: {
        rules: [
            // HTML loaders.
            {
                test: /\.hbs$/,
                use: 'handlebars-loader'
            },

            // Script loaders.
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            // Style loaders.
            {
                test: /\.scss$/,
                use: extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            // Assets loaders.
            {
                test: /\.json$/i,
                use: 'json-loader'
            },
            {
                test: /\.gif/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'image/gif'
                }
            },
            {
                test: /\.jpg/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'image/jpeg'
                }
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'image/png'
                }
            },
            {
                test: /\.svg$/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'image/svg+xml'
                }
            }
        ]
    },

    output: {
        filename: '[name].js',
        path: distPath
    },

    plugins: [
        new CleanPlugin(['dist'], {
            root: join(__dirname, '..')
        }),
        new CopyWebpackPlugin([
            { from: resolve(srcPath, 'manifest.json'), to: distPath },
            { from: resolve(srcPath, 'assets'), to: resolve(distPath, 'assets') }
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'), // Default to development.
            }
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        }),
        new FaviconsWebpackPlugin({
            logo: resolve(srcPath, 'favicon.png'),
            title
        }),
        new HtmlWebpackPlugin({
            bundle: 'options.js',
            favicon: resolve(srcPath, 'favicon.png'),
            filename: 'options.html',
            inject: false,
            template: resolve(srcPath, 'templates', 'options.hbs'),
            title: `${title} Options`,
        }),
        new HtmlWebpackPlugin({
            bundle: 'background.js',
            filename: 'background.html',
            inject: false,
            template: resolve(srcPath, 'templates', 'background.hbs')
        }),
        new WebpackNotifierPlugin({
            title: 'UNICORN POWER_UP!!!',
            contentImage: resolve(__dirname, 'unicorn.png'),
            alwaysNotify: true
        })
    ],

    resolve: {
        extensions: ['.js']
    }
};
