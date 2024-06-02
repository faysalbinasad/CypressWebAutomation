// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

/// Creating Custom Command 'SelectProduct'

Cypress.Commands.add('SelectProduct', (element) => { 


    cy.get('h4.card-title').each(($el, index, $list)=>{ //iterate each card to search and match the product name

        if($el.text().includes(element)) //matching the product name
            
        {
            cy.get('button.btn.btn-info').eq(index).click() //clicking the add to cart button
    
        }
    
    })

  })

  Cypress.Commands.add("LoginAPI", ()=>
{

cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login",
{"userEmail":"afba.qa@gmail.com","userPassword":"Faysal1234:)"}).
then(function(response)
{

    expect(response.status).to.eq(200)
    Cypress.env('token', response.body.token)
    
})

})



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })