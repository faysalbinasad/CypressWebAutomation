/// <reference types="Cypress" />

context("DB interaction with Cypress", ()=>{

    it("Database interaction with Cypress", ()=>{
    
        cy.sqlServer("Select * FROM Persons").then(function(result)
    {

        console.log(result[1][3]) //prints in browser console
        cy.log(result[1][3]) //prints in cypress console
    })

    })
})

