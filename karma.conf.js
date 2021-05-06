module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'chai', 'browserify'],
        files: [
            'src/**/*.test.js',
            'src/com/eduworks/ec/crypto/forgeAsync.js',
            {pattern: "forge", type: "module"}
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-browserify'
        ],
        preprocessors: {
            'src/**/*.test.js': [ 'browserify' ]
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: false
    });
};