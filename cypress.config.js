const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 10000, // increasing or altering default command time (for all test cases)

  reporter: 'cypress-mochawesome-reporter',

  env: {

    BaseUrl: "https://rahulshettyacademy.com",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
     specPattern: 'cypress\\integration\\examples\\*.js'
  },
});
