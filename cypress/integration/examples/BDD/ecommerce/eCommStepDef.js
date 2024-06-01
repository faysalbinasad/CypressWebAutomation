import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../../../support/PageObjects/ProductPage";
import HomePage from "../../../../support/PageObjects/HomePage";

let name
const homePage = new HomePage();
const productPage = new ProductPage();


// Given I open Ecommerce Page
Given('I open Ecommerce Page', function() {
    cy.visit(Cypress.env('BaseUrl') + "/angularpractice/");
});

// When I add items to cart
When('I add items to cart', function () {
    homePage.getShopTab().click(); // navigating to product list by clicking 'Shop' button

    this.data.productName.forEach(function (element) { // iterating each phone from the array/list
        cy.SelectProduct(element); // calling the custom method SelectProduct every time
    });

    productPage.checkOut().click(); // clicking on the checkout button [Top Right]
});

// When validate the total price
When('validate the total price', () => {
    let subTotal = 0;
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const totalPrice = $el.text();
        let result = totalPrice.split(" ");
        result = result[1].trim();
        subTotal = Number(subTotal) + Number(result);
    }).then(() => {
        cy.log(subTotal);
    });

    cy.get('h3 strong').each((element, index, $list) => {
        const actualTotal = element.text();
        let result1 = actualTotal.split(" ");
        const displayedTotal = result1[1].trim();
        expect(Number(displayedTotal)).to.equal(subTotal);
    });
});

// Then select the country,submit and verify Thankyou
Then('select the country,submit and verify Thankyou', () => {
    cy.contains("Checkout").click(); // clicking on the checkout button [To proceed checkout]
    cy.get("#country").type('India'); // Typing the country name (India)
    cy.get('.suggestions > ul > li > a').should('be.visible').click(); // click the searched country (India)
    cy.get('#checkbox2').click({ force: true }); // Clicking on the checkbox
    cy.get("input[type='submit']").click(); // clicking on purchase button

    // Assertions
    cy.get('.alert').then((element) => {
        const actualText = element.text();
        expect(actualText.includes("Success")).to.be.true;
    });
});

// When I fill the form details
When('I fill the form details', function (dataTable) {

    // [Henna , Female]
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0]); // putting the name in the first text box
    homePage.getGender().select(dataTable.rawTable[1][1]); // selecting the gender from the dropdown list
});

// When validate the form's behaviour
When('validate the forms behaviour', function () {
    homePage.getTwoWayDataBinding().should('have.value', name); // Checking the name is same or not in the two text boxes
    homePage.getEditBox().should('have.attr', 'minlength', '2'); // Checking whether the required minimum character length is 2 or not
    homePage.getEntrepreneaur().should('be.disabled'); // Checking the radio button is disabled or not
    Cypress.config('defaultCommandTimeout', 8000); // defining wait time only for this test case
});

// Then select the Shop page
Then('select the Shop page', function () {
    homePage.getShopTab().click();
});
