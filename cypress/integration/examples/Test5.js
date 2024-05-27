/// <reference types="Cypress" />

describe("My second test suite", () => {

    it("My second test case: Proceed to Checkout", () => {
   
        /// Clicking child Tab [1) Browse one URL 2) Then Go to a Child Tab 3) Then clcik one module]

cy.visit(Cypress.env('BaseUrl') + "/AutomationPractice/");

cy.get('#opentab').invoke('removeAttr', 'target').click();
cy.origin("https://www.qaclickacademy.com/", () => {


cy.get('#navbarSupportedContent a[href*="about"]').click()
cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
})

    })
})
