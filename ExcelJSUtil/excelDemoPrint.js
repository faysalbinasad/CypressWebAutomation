const ExcelJS = require('exceljs');

async function excelTest(){

const Workbook = new ExcelJS.Workbook();

await Workbook.xlsx.readFile('/Users/Faysal/Downloads/ExcelDownloadTest.xlsx')

const worksheet1 = Workbook.getWorksheet('Sheet1');

worksheet1.eachRow( (row, rowNumber) => 
    {

    row.eachCell( (cell, colNumber) =>
    {


        console.log (cell.value);

    });

});

}

excelTest();