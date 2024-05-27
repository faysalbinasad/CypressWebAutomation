/// <reference types="Cypress" />

describe("My fourth test suite", function(){

    it("My fourth test case: Proceed to Checkout", function(){
    
        cy.visit(Cypress.env('BaseUrl') + "/AutomationPractice/")

        cy.get("div.mouse-hover-content").invoke('show')
        //cy.contains('Top').click({ force: true })
         cy.contains('Top').click()
        cy.url().should('include', 'top')

    })
})
