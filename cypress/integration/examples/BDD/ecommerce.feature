Feature: : End to end Ecommerce validation

Application Regression

Scenario: Ecommerce products delivery
Given I open Ecommerce Page
When I add items to cart
Then validate the total price
Then select the country,submit and verify Thankyou


Scenario: Filling the form to shop
Given I open Ecommerce Page
When I fill the form details
Then validate the forms behaviour
Then select the Shop page
    