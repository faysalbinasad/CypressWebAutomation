/// <reference types="Cypress" />

describe("My second test suite", function(){

    it("My second test case: Proceed to Checkout", function(){
    
    //Checkboxes

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //Static Dropdowns

    cy.get('select').select('option2').should('have.value', 'option2')

    //Dynamic Dropdowns

    cy.get('#autocomplete').type('Bang')

    cy.get('.ui-menu-item').each(($el, index, $list) => {

        if($el.text()=== 'Bangladesh')
            {
                cy.wrap($el).click()
            }

    })

    ///Auto-complete
    cy.get('#autocomplete').should('have.value', 'Bangladesh')


    /// Hide-Unhide text boxes

    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')


    /// Radio Buttons

    cy.get('[value="radio2"]').check().should('be.checked')

    })
})

