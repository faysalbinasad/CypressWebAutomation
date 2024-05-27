/// <reference types="Cypress" />

import HomePage from "./PageObjects/HomePage"
import ProductPage from "./PageObjects/ProductPage"

describe("Framework-1 test suite", function(){

    beforeEach(() => {
        // runs before each test in the block

        cy.fixture('example').then(function(data)
    {

       this.data=data
        
    })
      })

    it("Framework-1 test case:", function(){

        Cypress.config('defaultCommandTimeout', 8000) // defining wait time only for this test case

        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name) //putting the name in the first text box

        homePage.getGender().select(this.data.gender) //selecting the gender from the dropdown list

        ///Assertions

        homePage.getTwoWayDataBinding().should('have.value',this.data.name )// Checking the name is same or not in the two text boxes

        homePage.getEditBox().should('have.attr', 'minlength', '2') // Checking whether the required minimum character length is 2 or not

        homePage.getEntrepreneaur().should('be.disabled') // Checking the radio button is disabled or not


        //cy.pause()

        homePage.getShopTab().click() //navigating to product list by clicking 'Shop' button

        Cypress.config('defaultCommandTimeout', 8000) // defining wait time only for this test case

        this.data.productName.forEach(function(element) //iterating each phone from the array/list
        
        {
            cy.SelectProduct(element) //calling the custom method SelectProduct everytime

        })
        
        productPage.checkOut().click() // clicking on the checkout button [Top Right]

        cy.contains("Checkout").click() // clicking on the checkout button [To proceed checkout]
        
        cy.get("#country").type('Bangladesh') //Typing the country name (Bangladesh)

        cy.get('.suggestions > ul > li > a', { timeout: 10000 }).should('be.visible').click() // Wait for and click the searched country (Bangladesh)
        
        //cy.get('#checkbox2').click() // Clicking on the checkbox
    })
})

