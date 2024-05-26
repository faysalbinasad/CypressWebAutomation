
describe("Calendar test suite", function(){

    it("Calendar test case:", function(){

        const MonthNumber = "6";
        const Date = "15";
        const Year = "2027";
    
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")

        cy.get (".react-date-picker__inputGroup").click() //click on the calendar modal

        cy.get (".react-calendar__navigation__label").click() //click on the year

        cy.get (".react-calendar__navigation__label").click() //again click on the year

        cy.contains("button", Year ).click() // Select the year (2027)

        cy.get(".react-calendar__year-view__months__month").eq(Number(MonthNumber)-1).click() // Click on the Month (June)

        cy.contains("button", Date ).click() // Select the date (15)

        // Assertions

        

    })
})


