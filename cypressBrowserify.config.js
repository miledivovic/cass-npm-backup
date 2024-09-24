const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'cypressBrowserify/fixtures',
  screenshotsFolder: 'cypressBrowserify/screenshots',
  video: false,
  defaultCommandTimeout: 60000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require("cypress-fail-fast/plugin")(on, config);
      return require('./cypressBrowserify/plugins/index.js')(on, config)
    },
    specPattern: 'src//**/*.test.js',
    supportFile: 'cypressBrowserify/support',
  },
})
