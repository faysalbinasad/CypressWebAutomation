

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 10000, // increasing or altering default command time (for all test cases)

  reporter: 'cypress-mochawesome-reporter',

  env: {

    BaseUrl: "https://rahulshettyacademy.com",
  },


  retries: {
    runMode: 1, //Retries for failed test cases
    },

  projectId: "hwp8xr", //(Project Name: CypressWebAutomation)

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
     //specPattern: 'cypress\\integration\\examples\\*.js'
       specPattern: 'cypress/integration/examples/**/*.js',
  },


/*     video: true,
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }, */

});