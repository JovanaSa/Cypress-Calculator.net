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
        cy.get('#homecaldiv').should('exist');
        cy.get('#contentout').should('exist');
        cy.get('table:first').should('exist');
        cy.get('tbody:first').should('exist');
        cy.get('#sciout').should('exist');
        cy.get('#sciout > tbody > :nth-child(1) > td > :nth-child(1)').should('exist');
        cy.get('#sciInPut').should('exist');
        cy.get('#sciOutPut').should('exist');
        //homefun div
        cy.get('#homefunbtn').should('exist');
        //prvi red
        cy.get('#homefunbtn > :nth-child(1)').should('exist');
        //kolone unutar prvog reda
        cy.get('[onclick="r(\'sin\')"]').contains('sin').should('exist');
        cy.get('[onclick="r(\'cos\')"]').contains('cos').should('exist');
        cy.get('[onclick="r(\'tan\')"]').contains('tan').should('exist');
        //radiobuttons
        cy.get('.scird').should('exist');
        cy.get('[for="scirdsettingd"]').should('exist');
        cy.get('#scirdsettingd').should('exist');
        cy.contains('Deg').should('exist');
        cy.get('[for="scirdsettingr"]').should('exist');
        cy.get('#scirdsettingr').should('exist');
        cy.contains('Rad').should('exist');
        //drugi red
        cy.get('#homefunbtn > :nth-child(2)').should('exist');
        //kolone unutar drugog reda
        cy.get('[onclick="r(\'asin\')"]').contains('sin').should('exist');
        cy.get('[onclick="r(\'asin\')"] > sup').contains('-1').should('exist');
        cy.get('[onclick="r(\'acos\')"]').contains('cos').should('exist');
        cy.get('[onclick="r(\'acos\')"] > sup').contains('-1').should('exist');
        cy.get('[onclick="r(\'atan\')"]').contains('tan').should('exist');
        cy.get('[onclick="r(\'atan\')"] > sup').contains('-1').should('exist');
    });

});
