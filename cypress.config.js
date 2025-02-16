const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://fastn.ai',
    experimentalStudio: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      require('@4tw/cypress-drag-drop')(on)
    }
  }
})