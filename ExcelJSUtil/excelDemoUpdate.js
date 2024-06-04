const ExcelJS = require('exceljs');

async function writeExcelTest(searchText, replacedText, change, filePath)

{


const Workbook = new ExcelJS.Workbook();

//reading the values from the cells

await Workbook.xlsx.readFile(filePath)

const worksheet1 = Workbook.getWorksheet('Sheet1');

const output = await readExcel(worksheet1, searchText);

const cellValue = worksheet1.getCell(output.row, output.column+change.columnChange);
cellValue.value = replacedText;

//Writing the new value to the cells
await Workbook.xlsx.writeFile(filePath)

}

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

//Scenario: Update Mango price to 350

writeExcelTest("Mango", 350, {rowChange: 0, columnChange: 2}, "/Users/Asus/Downloads/ExcelTest.xlsx");