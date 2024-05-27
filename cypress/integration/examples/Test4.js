/// <reference types="Cypress" />

describe("My second test suite", function(){

    it("My second test case: Proceed to Checkout", function(){
    
    cy.visit(Cypress.env('BaseUrl') + "/AutomationPractice/")

    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()

    //window:alert
    cy.on('window:alert', (str)=>{

    //Mocha

    expect(str).to.equal('Hello , share this practice page and share your knowledge')
    
    })


    //window:alert
    cy.on('window:confirm', (str)=>{

    //Mocha

    expect(str).to.equal('Hello , Are you sure you want to confirm?')
    
    })



     //cy.on('window:confirm', () => false); //To cancel the confirmation window action






    })
})

