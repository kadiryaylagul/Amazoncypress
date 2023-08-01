const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:{
      baseUrl:'https://www.amazon.com.tr',
      watchForFileChanges: false,
      hideXHRInCommandLog: true,
      includeShadowDom: true,
      viewportHeight: 900,
      viewportWidth: 1440,
      chromeWebSecurity: false,
      retries: {
        runMode: 1,
        openMode: 0,
      },
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
