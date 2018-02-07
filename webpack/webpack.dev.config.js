import ChromeExtensionReloader from 'webpack-chrome-extension-reloader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import WebpackNotifierPlugin from 'webpack-notifier';

// Common.
import { entry, extensions, loaders, output, plugins, srcPath, title } from './common.config';

export default {
    devtool: 'source-map',

    entry,

    module: {
        rules: loaders
    },

    output,

    plugins: plugins.concat([
        new ChromeExtensionReloader({
            port: 9090,
            reloadPage: true,
            entries: {
                'background': 'background',
                'content-script': 'content-script',
                'options': 'options'
            }
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
    ]),

    resolve: {
        extensions
    }
};
