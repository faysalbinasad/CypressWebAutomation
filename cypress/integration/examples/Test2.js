/// <reference types="Cypress" />

describe("My second test suite", function(){

    it("My second test case: Proceed to Checkout", function(){
    
    cy.visit(" https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
    cy.wait(2000)
    //cy.get(".product:visible").should("have.length",4)
    
        cy.get('.products').as('ProductLocator')
    
    ///Dynamically searching and clicking on the product as per index

    cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {

        const textVeg = $el.find('h4.product-name').text()
        
        if(textVeg.includes('Cashews'))

            {
                cy.wrap($el).find('button').click()

            }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get('button').contains('Place Order').click();


    })
    
})

