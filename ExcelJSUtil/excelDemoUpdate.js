const ExcelJS = require('exceljs');

async function excelTest(){

const Workbook = new ExcelJS.Workbook();

//reading the values from the cells

await Workbook.xlsx.readFile('/Users/Faysal/Downloads/ExcelDownloadTest.xlsx')

const worksheet1 = Workbook.getWorksheet('Sheet1');

worksheet1.eachRow( (row, rowNumber) => 
    {

    row.eachCell( (cell, colNumber) =>
    {

            if(cell.value === 'Apple')
                {

                    console.log(rowNumber);
                    console.log(colNumber);
                }

    });

});

const cellValue = worksheet1.getCell(3,2);
cellValue.value = "iPhone"

//Writing the new value to the cells
await Workbook.xlsx.writeFile('/Users/Faysal/Downloads/ExcelDownloadTest.xlsx')

}

excelTest();