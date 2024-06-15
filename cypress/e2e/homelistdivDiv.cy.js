describe('homecaldiv', () => {
    const selectors = {
      logo: '#logo',
      searchBox: '#calcSearchTerm',
      
    };
    //odlazak na sajt pre svakog testa
    beforeEach(() => {
      cy.visit('https://www.calculator.net/');
      cy.get(selectors.logo).should('exist');
      cy.get(selectors.searchBox).should('exist');
    });

    //provera postojanja elemenata
    it('Element existence', () => {
        cy.get('#homelistdiv').should('exist');
        cy.get('#homelistdiv > #contentout').should('exist');
        cy.get('#homelistwrap').should('exist');
        cy.get('.hicon').should('exist');
        //prvi red
        cy.get('.homelisttile').should('exist');
        cy.get(':nth-child(1) > .hicon > a > img').should('exist').and('be.visible');
        cy.get(':nth-child(1) > .hicon > a').should('exist');
        cy.get(':nth-child(1) > .hh').should('exist');
        cy.get(':nth-child(1) > .hh > a').contains('Financial Calculators').should('exist');
        //linkovi unutar prvog reda
        cy.get('#hl1').should('exist');
        cy.get('#hl1 > :nth-child(1)').should('exist');
        //link
        cy.get('#hl1 > :nth-child(1) > a').contains('Mortgage Calculator').should('exist');
        cy.get('#hl1 > :nth-child(2)').should('exist');
        //link
        cy.get('#hl1 > :nth-child(2) > a').contains('Loan Calculator').should('exist');
        cy.get('#hl1 > :nth-child(3)').should('exist');
        //link
        cy.get('#hl1 > :nth-child(3) > a').contains('Auto Loan Calculator').should('exist');
        cy.get('#hl1 > :nth-child(4)').should('exist');
        //link
        cy.get('#hl1 > :nth-child(4) > a').contains('Interest Calculator').should('exist');
        cy.get('#hl1 > :nth-child(5)').should('exist');
        //link
        cy.get('#hl1 > :nth-child(5) > a').contains('Payment Calculator').should('exist');
    })
})