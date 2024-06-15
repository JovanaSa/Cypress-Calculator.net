describe('homecaldiv', () => {
    const selectors = {
        logo: '#logo',
        searchBox: '#calcSearchTerm',
        homeListDiv: '#homelistdiv',
        contentOut: '#homelistdiv > #contentout',
        homeListWrap: '#homelistwrap',
        hicon: '.hicon',
        homeListTile: '.homelisttile',
        firstRow: '#hl1',
        firstRowLinks: [
            'Mortgage Calculator',
            'Loan Calculator',
            'Auto Loan Calculator',
            'Interest Calculator',
            'Payment Calculator',
            'Retirement Calculator',
            'Amortization Calculator',
            'Investment Calculator',
            'Inflation Calculator',
            'Finance Calculator',
            'Income Tax Calculator',
            'Compound Interest Calculator',
            'Salary Calculator',
            'Interest Rate Calculator',
            'Sales Tax Calculator'
        ],
        secondRow: '#hl2',
        secondRowLinks: [
            'BMI Calculator',
            'Calorie Calculator',
            'Body Fat Calculator',
            'BMR Calculator',
            'Ideal Weight Calculator',
            'Pace Calculator',
            'Pregnancy Calculator',
            'Pregnancy Conception Calculator',
            'Due Date Calculator'
        ],
        thirdRow: '#hl3',
        thirdRowLinks: [
            'Scientific Calculator',
            'Fraction Calculator',
            'Percentage Calculator',
            'Random Number Generator',
            'Triangle Calculator',
            'Standard Deviation Calculator'
        ],
        fourthRowLinks: [
            'Age Calculator',
            'Date Calculator',
            'Time Calculator',
            'Hours Calculator',
            'GPA Calculator',
            'Grade Calculator',
            'Concrete Calculator',
            'Subnet Calculator',
            'Password Generator',
            'Conversion Calculator'
        ]
    };

    beforeEach(() => {
        cy.visit('https://www.calculator.net/');
        cy.get(selectors.logo).should('exist');
        cy.get(selectors.searchBox).should('exist');
    });

    it('Element existence', () => {
        cy.get(selectors.homeListDiv).should('exist');
        cy.get(selectors.contentOut).should('exist');
        cy.get(selectors.homeListWrap).should('exist');
        cy.get(selectors.hicon).should('exist');

        // Proveri prvi red
        cy.get(selectors.homeListTile).eq(0).should('exist');
        cy.get(':nth-child(1) > .hicon').should('exist');
        cy.get(':nth-child(1) > .hicon > a > img').should('exist').and('be.visible');
        cy.get(':nth-child(1) > .hicon > a').should('exist');
        cy.get(':nth-child(1) > .hh').should('exist');
        cy.get(':nth-child(1) > .hh > a').contains('Financial Calculators').should('exist');

        selectors.firstRowLinks.forEach((linkText, index) => {
            cy.get(`${selectors.firstRow} > :nth-child(${index + 1})`).should('exist');
            cy.get(`${selectors.firstRow} > :nth-child(${index + 1}) > a`).contains(linkText).should('exist');
        });

        // Proveri drugi red
        cy.get(selectors.homeListTile).eq(1).should('exist');
        cy.get(':nth-child(2) > .hicon').should('exist');
        cy.get(':nth-child(2) > .hicon > a > img').should('exist').and('be.visible');
        cy.get(':nth-child(2) > .hicon > a').should('exist');
        cy.get(':nth-child(2) > .hh').should('exist');
        cy.get(':nth-child(2) > .hh > a').contains('Fitness & Health Calculators').should('exist');

        selectors.secondRowLinks.forEach((linkText, index) => {
            cy.get(`${selectors.secondRow} > :nth-child(${index + 1})`).should('exist');
            cy.get(`${selectors.secondRow} > :nth-child(${index + 1}) > a`).contains(linkText).should('exist');
        });

        // Proveri treći red
        cy.get(selectors.homeListTile).eq(2).should('exist');
        cy.get(':nth-child(3) > .hicon').should('exist');
        cy.get(':nth-child(3) > .hicon > a > img').should('exist').and('be.visible');
        cy.get(':nth-child(3) > .hicon > a').should('exist');
        cy.get(':nth-child(3) > .hh').should('exist');
        cy.get(':nth-child(3) > .hh > a').contains('Math Calculators').should('exist');

        selectors.thirdRowLinks.forEach((linkText, index) => {
            cy.get(`${selectors.thirdRow} > :nth-child(${index + 1})`).should('exist');
            cy.get(`${selectors.thirdRow} > :nth-child(${index + 1}) > a`).contains(linkText).should('exist');
        });

        // Proveri četvrti red
        cy.get(selectors.homeListTile).eq(3).should('exist');
        cy.get(':nth-child(4) > .hicon').should('exist');
        cy.get(':nth-child(4) > .hicon > a > img').should('exist').and('be.visible');
        cy.get(':nth-child(4) > .hicon > a').should('exist');
        cy.get(':nth-child(4) > .hh').should('exist');
        cy.get(':nth-child(4) > .hh > a').contains('Other Calculators').should('exist');

        selectors.fourthRowLinks.forEach((linkText, index) => {
            cy.get(selectors.homeListTile).eq(3).find(`li:nth-child(${index + 1})`).should('exist');
            cy.get(selectors.homeListTile).eq(3).find(`li:nth-child(${index + 1}) > a`).contains(linkText).should('exist');
        });

        // Proveri dugme za sve kalkulatore
        cy.get('[style="text-align:center;padding-top:30px;"]').should('exist');
        cy.get('[style="text-align:center;padding-top:30px;"] > a').should('exist');
        cy.get('[style="text-align:center;padding-top:30px;"] > a > img').should('exist').and('be.visible');
    });
});
