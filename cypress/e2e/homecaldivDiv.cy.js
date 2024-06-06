describe('homecaldiv', () => {
    const selectors = {
      logo: '#logo',
    };
  
    beforeEach(() => {
      cy.visit('https://www.calculator.net/');
      cy.get(selectors.logo).should('exist');
      cy.get(selectors.searchBox).should('exist');
    });
    
    it('Logo image', () => {
        cy.get('#logo img').should('exist').and('be.visible');
      });

});
