/// <reference types="Cypress" />

describe("Framework-1 test suite", function(){

    beforeEach(() => {
        // runs before each test in the block

        cy.fixture('example').then(function(data)
    {

       this.data=data
        
    })
      })

    it("Framework-1 test case:", function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get("input[name='name']:nth-child(2)").type(this.data.name) //putting the name in the first text box

        cy.get('select').select(this.data.gender) //selecting the gender from the dropdown list

        ///Assertions

        cy.get(':nth-child(4) > .ng-pristine').should('have.value',this.data.name )// Checking the name is same or not in the two text boxes

        cy.get("input[name='name']:nth-child(2)").should('have.attr', 'minlength', '2') // Checking whether the required minimum character length is 2 or not

        cy.get('#inlineRadio3').should('be.disabled') // Checking the radio button is disabled or not


        cy.get(':nth-child(2) > .nav-link').click() //navigating to product list by clicking 'Shop' button

        cy.SelectProduct('iphone X')

    })
})

