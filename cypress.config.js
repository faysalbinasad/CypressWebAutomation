const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 10000, // increasing or altering default command time (for all test cases)

  env: {

    BaseUrl: "https://rahulshettyacademy.com",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     specPattern: 'cypress\\integration\\examples\\*.js'
  },
});
