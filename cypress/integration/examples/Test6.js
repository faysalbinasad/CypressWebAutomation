/// <reference types="Cypress" />

describe("My fourth test suite", function(){

    it("My fourth test case: Proceed to Checkout", function(){
    
    cy.visit(Cypress.env('BaseUrl') + "/AutomationPractice/")

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

        const text = $el.text()
        if(text.includes("Python")){


            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

                const priceText = price.text()
                expect(priceText).to.equal('25')

            })

        }

    })

    })
})
