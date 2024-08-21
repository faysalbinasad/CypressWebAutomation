

const { defineConfig } = require("Cypress");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

const sqlServer = require('cypress-sql-server');

const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJS = require('exceljs');


async function setupNodeEvents(on, config) {


  config.db = {
    userName: "faysaldbdemo",
    password: "Faysal@Azure",
    server: "faysaldbdemo.database.windows.net",
    options: {
      database: "faysalbinasad",
      encrypt: true,
      rowCollectionOnRequestCompletion: true,
    },
  };


  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  const tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  on('task', {


    excelToJsonConverter(filePath) {
      const result = excelToJson({
      source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });

      return result;

    }


  })


  on('task', {
    async writeExcelTest({searchText, replacedText, change, filePath})

    {
    
    const Workbook = new ExcelJS.Workbook();
    
    //reading the values from the cells
    
    await Workbook.xlsx.readFile(filePath)
    
    const worksheet1 = Workbook.getWorksheet('Sheet1');
    
    const output = await readExcel(worksheet1, searchText);
    
    const cellValue = worksheet1.getCell(output.row, output.column+change.columnChange);
    cellValue.value = replacedText;
    
    //Writing the new value to the cells
    return Workbook.xlsx.writeFile(filePath).then( ()=>
    {

        return true;

    })

    .catch((error)=>
    {
      return false;

    } )
    
    }
  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
} //setupNodeEvents closes here

async function readExcel(worksheet1, searchText)
{
    let output = {row:-1, column:-1};

    worksheet1.eachRow( (row, rowNumber) => 
        {
    
        row.eachCell( (cell, colNumber) =>
        {
    
                if(cell.value === searchText)
                    {
    
                      /*   console.log(rowNumber);
                        console.log(colNumber); */
    
                        output.row = rowNumber;
                        output.column = colNumber;
    
                    }
    
        });
    
    });
    return output;
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

    specPattern: 'cypress/integration/examples/**/*.js',

    //specPattern: 'cypress/integration/examples/BDD/**/*.feature'
  },

});