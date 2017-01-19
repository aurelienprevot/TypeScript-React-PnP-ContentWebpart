var SPSaveWebpackPlugin = require('spsave-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    //COMMENT THIS LINE IN PRODUCTION
    devtool: 'eval',
    //END

    entry: {
        webparts: ['./webpart/wpRender.tsx'],
    },
    output: {
        path: './dist',
        filename: 'webpart.bundle.js'
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                exclude: "node_modules",
                loader: "ts-loader"
            }
        ],
    },

    plugins:
    [
        //UNCOMMENT THIS IN PRODUCTION
        /*new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({ minimize: true, compress: { warnings: false }, comments: false }),
        */
        //END

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

        new SPSaveWebpackPlugin({
            "coreOptions": {
                "checkin": true,
                "checkinType": 1,
                "siteUrl": 'URL'
            },
            "credentialOptions": {
                username: 'USERNAME',
                password: 'PASSWORD'
            },
            "fileOptions": {
                "folder": "/_catalogs/wp"
            }
        })
    ]
};