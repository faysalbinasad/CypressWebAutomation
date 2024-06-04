describe('Upload-Download Test', () => 
{

    it('Verify excel upload download', () => 
    {
        const replacePrice = 550;
        const searchTextFruit = "Mango"

        const FilePath = (Cypress.config("fileServerFolder") + "/cypress/downloads/download.xlsx")

        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");

        cy.get("#downloadButton").click();

        cy.task('writeExcelTest', {searchText: searchTextFruit, replacedText: replacePrice, change: {rowChange: 0, columnChange: 2}, filePath: FilePath })

        cy.get("#fileinput").selectFile(FilePath);

        cy.contains(searchTextFruit).parent().parent().find("#cell-4-undefined").
        should('have.text', replacePrice)

    })


})