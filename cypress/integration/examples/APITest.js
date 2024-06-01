/// <reference types="Cypress" />

describe("Test API", function() {
    
    it("API Test:", function() {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',{

        "name":"Learn Appium Automation with Java",
        "isbn":"bcdgh",
        "aisle":"2279",
        "author":"John foe"
        }).then(function(response)
        {
           expect(response.body).to.have.property("Msg", "successfully added")
           expect(response.status).to.eq(200)
        })

    })
})
