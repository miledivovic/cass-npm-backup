const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'cypressWebpack/fixtures',
  screenshotsFolder: 'cypressWebpack/screenshots',
  video: false,
  defaultCommandTimeout: 60000,
  fileServerFolder: 'src/com/eduworks/ec/crypto',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypressWebpack/plugins/index.js')(on, config)
    },
    specPattern: 'src//**/*.test.js',
    supportFile: 'cypressWebpack/support',
  }
})
