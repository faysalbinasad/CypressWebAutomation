/// <reference types="Cypress" />

describe("HTTP Mock request by Cypress", function() {
    
    it("Mock request by Cypress:", function() {
        // Visit the page
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        // Intercept the request
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 

            (req) => { 

                req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";

                req.continue((res) => {

                    //expect(res.statusCode).to.equal(403);

                });
            }).as('DummyURL');

        // Add a wait to ensure the page has loaded
        cy.wait(5000);

        // Log the visibility of the button
        cy.get("button[class='btn btn-primary']").should('be.visible').then(($btn) => {
            cy.log('Button is visible');
        });

        // Ensure the button is visible before clicking
        cy.get("button[class='btn btn-primary']").should('be.visible').click();

        // Wait for the intercepted request
        cy.wait('@DummyURL');
    });
});
