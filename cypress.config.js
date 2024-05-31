

const { defineConfig } = require("cypress");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

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
      setupNodeEvents,
     //specPattern: 'cypress\\integration\\examples\\*.js'

       //specPattern: 'cypress/integration/examples/**/*.js',

       specPattern: 'cypress/integration/examples/BDD/**/*.feature'
  },

});