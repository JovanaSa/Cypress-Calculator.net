describe('headerout', () => {
    const selectors = {
      logo: '#logo',
      searchBox: '#calcSearchTerm',
      headerOut: '#headerout',
      header: '#header',
      logoImg: 'a > img',
      mortgageLink: '#hl1 > :nth-child(1) > a'
    };
    //odlazak na sajt pre svakog testa
    beforeEach(() => {
      cy.visit('https://www.calculator.net/');
      cy.get(selectors.logo).should('exist');
      cy.get(selectors.searchBox).should('exist');
    });
    //provera postojanja elemenata
    it('Element existence', () => {
      cy.get(selectors.headerOut).should('exist');
      cy.get(selectors.header).should('exist');
      cy.get(selectors.logo).should('exist');
      cy.get(selectors.logoImg).should('exist');
    });
    //provera da li logo ima sliku
    it('Logo image', () => {
        cy.get('#logo img').should('exist').and('be.visible');
      });
    //provera funkcionalnosti logo slike da vraca na home page
    it('Logo navigation', () => {
      cy.get(selectors.mortgageLink).should('exist').click();
      cy.url().should('eq', 'https://www.calculator.net/mortgage-calculator.html');
      cy.get(selectors.logoImg).should('exist').click();
      cy.url().should('eq', 'https://www.calculator.net/');
    });
  });