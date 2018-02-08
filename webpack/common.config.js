import autoprefixer from 'autoprefixer';
import CleanPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

const uriLimit = 50000; // 50kb

export const alias = {
    vue: 'vue/dist/vue.common.js'
};
export const distPath = join(__dirname, '..', 'dist');
export const srcPath = join(__dirname, '..', 'src');
export const title = 'Plauser';
export const entry = {
    'background': resolve(srcPath, 'background.js'),
    'content-script': resolve(srcPath, 'content-script.js'),
    'options': resolve(srcPath, 'options.js')
};
export const extensions = ['.js', '.vue'];
export const output = {
    filename: '[name].js',
    path: distPath
};
export const loaders = [
    // HTML loaders.
    {
        test: /\.hbs$/,
        use: 'handlebars-loader'
    },

    // Script loaders.
    {
        test: /.js$/,
        use: ['babel-loader'],
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                scss: extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            extractCSS: true
        }
    },
    // Style loaders.
    {
        test: /\.scss$/,
        use: extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader']
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
];
export const plugins = [
    new CleanPlugin(['dist'], {
        root: join(__dirname, '..')
    }),
    new CopyWebpackPlugin([
        { from: resolve(srcPath, 'manifest.json'), to: distPath },
        { from: resolve(srcPath, 'assets'), to: resolve(distPath, 'assets') }
    ]),
    new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true
    }),
    new FaviconsWebpackPlugin({
        logo: resolve(srcPath, 'favicon.png'),
        title
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'), // Default to development.
        }
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: () => [
                autoprefixer({ browsers: ['last 3 versions'] })
            ]
        }
    })
];
