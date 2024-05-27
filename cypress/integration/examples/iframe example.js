/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("My iframe test suite", function(){

    it("My iframe test case:", function(){
    
        cy.visit(Cypress.env('BaseUrl') + "/AutomationPractice/")
        
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        //cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })
})


