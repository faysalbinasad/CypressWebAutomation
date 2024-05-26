/// <reference types="Cypress" />

describe("My eighth test suite", function(){

    it("My eighth test case:", function(){
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#opentab').then(function(el)

{

    const url = el.prop('href')
    cy.visit(url)

    cy.origin(url, ()=>
    {
        cy.get("div.sub-menu-bar a[href*='about']").click()

    })


})

    })
})
