module.exports = {
    entry: "./app.js",
    output: {
        path: './build',
        publicPath:'build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {test: /\.less/,loader: 'style!css!less'},
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel",
              query:
                {
                  presets:['react','es2015']
                }
            }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    devtool:'source-map'
};
