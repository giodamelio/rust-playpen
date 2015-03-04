var webpack = require("webpack");

module.exports = {
    entry: [
        "./js/main.jsx"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    // Make sourcemaps
    devtool: "inline-source-map",
    module: {
        loaders: [
            // Load js with jsx and babel
            { 
                test: /\.(jsx|js)$/,
                loaders: ["jsx", "babel"],
                exclude: /node_modules/
            },
            // Load json
            { 
                test: /\.json$/,
                loaders: ["json"]
            }
        ]
    }
};

