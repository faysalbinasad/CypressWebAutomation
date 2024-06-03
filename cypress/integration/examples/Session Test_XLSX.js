/// <reference types="Cypress" />

//const neatCSV = require('neat-csv'); //importing the installed neat-csv package
//import neatCsv from 'neat-csv';

let productName

describe("JWT Session Suit 2", function () {

    it("Read file from Excel", async () => {

        cy.LoginAPI().then(function () {

            cy.visit("https://rahulshettyacademy.com/client/",

                {

                    onBeforeLoad: function (window) {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })

        })
        cy.get('.card-body b').eq(1).then(function (ele) {

            productName = ele.text();
        })

        cy.get('.card-body button:last-of-type').eq(1).click();

        cy.get("[routerlink*='cart']").click();

        cy.contains("Checkout").click();

        cy.get("[placeholder*='Country']").type("bang");

        cy.get(".ta-results button").each(($el, index, $list) => {

            if ($el.text() === " Bangladesh") {

                cy.wrap($el).click()
            }

        })

        cy.get(".action__submit").click();

        cy.wait(3000);

        cy.get('.order-summary button').eq(1).click();

        const filePath = (Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_afba.qa.xlsx")

        cy.task('excelToJsonConverter', filePath).then(function (result) {

            cy.log(result.data[1].A)

            expect(productName).to.equal(result.data[1].B) // asserting the product name
        })

       /*  Shortcut: It just read the whole file from excel and match 
        (Just for validation, not for data pulling) */

        cy.readFile(filePath).then(function (text) {

        expect(text).to.include(productName)
        })

    })
})
