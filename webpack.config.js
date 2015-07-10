var path = require("path");
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("./node_modules/webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
    entry: {
        bike: "./src/bikes/bikeController",
        car: "./src/cars/carController"
    },
    output: {
        path: path.join(__dirname, "bundles"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    plugins: [
        new CommonsChunkPlugin("commons.js"),
        new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        root: path.resolve('./src')
    }
};
