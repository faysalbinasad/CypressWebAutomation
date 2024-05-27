/// <reference types="Cypress" />

describe("My first test suite", function(){

    it("My First Test Case: Adding to Cart", function(){
    
    cy.visit(Cypress.env('BaseUrl') + "/seleniumPractise/#/")

    cy.get(".search-keyword").type("ca")
    cy.wait(2000)
    //cy.get(".product:visible").should("have.length",4)
    
        cy.get('.products').as('ProductLocator')

    // Parent-Child chaining (Test case= searching 4 product which contains 'Ca')
    cy.get('@ProductLocator').find('.product').should('have.length',4)
    
    // (Test case= Clicking on 'Add to Cart') by indexing

    cy.get('@ProductLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
    {

        console.log('Faysal the Boss')
    })

    ///Dynamically searching and clicking on the product as per index

    cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {

        const textVeg = $el.find('h4.product-name').text()
        
        if(textVeg.includes('Cashews'))

            {
                cy.wrap($el).find('button').click()

            }
        ///Assert if the logo is correctly displayed or not
            cy.get('.brand').should('have.text','GREENKART')
    })
        /// Printing text from Logo in Log
        cy.get('.brand').then(function(logoElement)
        {
        cy.log(logoElement.text())

        })

    })
    
    })
