var path = require("path");

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './node_modules/sinon/pkg/sinon.js',
            'test/test.index.js'
        ],
        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                root: path.resolve('./src')
            }
        },
        preprocessors: {
            'test/test.index.js': ['webpack', 'sourcemap']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-webpack'
        ]
    })
}
