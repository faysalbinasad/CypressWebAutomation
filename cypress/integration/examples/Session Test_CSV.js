/// <reference types="Cypress" />

//const neatCSV = require('neat-csv'); //importing the installed neat-csv package
import neatCsv from 'neat-csv';

let productName

describe("JWT Session Suit", function() {
    
    it("is logged in through local storage", async()=> {

cy.LoginAPI().then(function()
{

cy.visit("https://rahulshettyacademy.com/client/",

{

    onBeforeLoad : function(window)
    {
        window.localStorage.setItem('token',  Cypress.env('token'))
    }
})

})
    cy.get('.card-body b').eq(1).then(function(ele)
{

    productName = ele.text();
})

    cy.get('.card-body button:last-of-type').eq(1).click();

    cy.get("[routerlink*='cart']").click();

    cy.contains("Checkout").click();

    cy.get("[placeholder*='Country']").type("bang");

    cy.get(".ta-results button").each(($el, index, $list)=>
    {

        if($el.text() === " Bangladesh")
            {

               cy.wrap($el).click() 
            }

    })

    cy.get(".action__submit").click();

    cy.wait(3000);

    cy.get('.order-summary button').eq(0).click();

    // Cypress.config("fileServerFolder") //This command will get the project folder path

    cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_afba.qa.csv").
    then( async(text)=>
{

    const csv = await neatCSV(text);

    console.log(csv);

    const actualProductCSV = csv[0]["Product Name"]

    expect(productName).to.equal(actualProductCSV)


})


    })
})
