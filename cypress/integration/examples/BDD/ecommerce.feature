Feature: : End to end Ecommerce validation

Application Regression

@Regression
Scenario: Ecommerce products delivery
Given I open Ecommerce Page
When I add items to cart
When validate the total price
Then select the country,submit and verify Thankyou

@Smoke
Scenario: Filling the form to shop
Given I open Ecommerce Page
When I fill the form details
|name | gender|
|Henna | Female|
When validate the forms behaviour
Then select the Shop page
    