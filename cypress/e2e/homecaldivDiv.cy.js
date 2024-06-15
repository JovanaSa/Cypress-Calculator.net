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
        //homefun div<pocetak
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
        cy.get('[onclick="r(\'pi\')"]').contains('π').should('exist');
        cy.get('[onclick="r(\'e\')"]').contains('e').should('exist');
        //treci red
        cy.get('#homefunbtn > :nth-child(3)').should('exist');
        //kolone unutar treceg reda
        cy.get('[onclick="r(\'pow\')"]').contains('x').should('exist');
        cy.get('[onclick="r(\'pow\')"] > sup').contains('y').should('exist');
        cy.get('[onclick="r(\'x3\')"]').contains('x').should('exist');
        cy.get('[onclick="r(\'x3\')"] > sup').contains('3').should('exist');
        cy.get('[onclick="r(\'x2\')"]').contains('x').should('exist');
        cy.get('[onclick="r(\'x2\')"] > sup').contains('2').should('exist');
        cy.get('[onclick="r(\'ex\')"]').contains('e').should('exist');
        cy.get('[onclick="r(\'ex\')"] > sup').contains('x').should('exist');
        cy.get('[onclick="r(\'10x\')"]').contains('10').should('exist');
        cy.get('[onclick="r(\'10x\')"] > sup').contains('x').should('exist');
        //cetvrti red
        cy.get('#homefunbtn > :nth-child(4)').should('exist');
        //kolone unutar cetvrtog reda
        cy.get('[onclick="r(\'apow\')"]').contains('√x').should('exist');
        cy.get('[onclick="r(\'apow\')"] > sup').contains('y').should('exist');
        cy.get('[onclick="r(\'3x\')"]').contains('√x').should('exist');
        cy.get('[onclick="r(\'3x\')"] > sup').contains('3').should('exist');
        cy.get('[onclick="r(\'sqrt\')"]').contains('√x').should('exist');
        cy.get('[onclick="r(\'ln\')"]').contains('ln').should('exist');
        cy.get('[onclick="r(\'log\')"]').contains('log').should('exist');
        //peti red
        cy.get('#homefunbtn > :nth-child(5)').should('exist');
        //kolone unutar petog reda
        cy.get('[onclick="r(\'(\')"]').contains('(').should('exist');
        cy.get('[onclick="r(\')\')"]').contains(')').should('exist');
        cy.get('[onclick="r(\'1/x\')"]').contains('1/x').should('exist');
        cy.get('[onclick="r(\'pc\')"]').contains('%').should('exist');
        cy.get('[onclick="r(\'n!\')"]').contains('n!').should('exist');
        //homefun div>kraj
        //druga tabela homecal<pocetak
        cy.get('[style="padding-top:3px;"]').should('exist');
        //prvi red
        cy.get('[style="padding-top:3px;"] > :nth-child(1)');
        //kolone unutar prvog reda
        cy.get('[onclick="r(7)"]').contains('7').should('exist');
        cy.get('[onclick="r(8)"]').contains('8').should('exist');
        cy.get('[onclick="r(9)"]').contains('9').should('exist');
        cy.get('[onclick="r(\'+\')"]').contains('+').should('exist');
        cy.get('[onclick="r(\'bk\')"]').contains('Back').should('exist');
        //drugi red
        cy.get('[style="padding-top:3px;"] > :nth-child(2)').should('exist');
        //kolone unutar drugog reda
        cy.get('[onclick="r(4)"]').contains('4').should('exist');
        cy.get('[onclick="r(5)"]').contains('5').should('exist');
        cy.get('[onclick="r(6)"]').contains('6').should('exist');
        cy.get('[onclick="r(\'-\')"]').contains('–').should('exist');
        cy.get('[onclick="r(\'ans\')"]').contains('Ans').should('exist');
        //treci red
        cy.get('[style="padding-top:3px;"] > :nth-child(3)').should('exist');
        //kolone unutar treceg reda
        cy.get('[onclick="r(1)"]').contains('1').should('exist');
        cy.get('[onclick="r(2)"]').contains('2').should('exist');
        cy.get('[onclick="r(3)"]').contains('3').should('exist');
        cy.get('[onclick="r(\'*\')"]').contains('×').should('exist');
        cy.get('[onclick="r(\'M+\')"]').contains('M+').should('exist');
        //cetvrti red
        cy.get('[style="padding-top:3px;"] > :nth-child(4)').should('exist')
        //kolone unutar cetvrtog reda
        cy.get('[onclick="r(0)"]').contains('0').should('exist');
        cy.get('[onclick="r(\'.\')"]').contains('.').should('exist');
        cy.get('[onclick="r(\'EXP\')"]').contains('EXP').should('exist');
        cy.get('[onclick="r(\'/\')"]').contains('/').should('exist');
        cy.get('[onclick="r(\'M-\')"]').contains('M-').should('exist');
        //peti red
        cy.get('[style="padding-top:3px;"] > :nth-child(5)').should('exist');
        //kolone unutar petog reda
        cy.get('[onclick="r(\'+/-\')"]').contains('±').should('exist');
        cy.get('[onclick="r(\'RND\')"]').contains('RND').should('exist');
        cy.get('[onclick="r(\'C\')"]').contains('AC').should('exist');
        cy.get('[onclick="r(\'=\')"]').contains('=').should('exist');
        cy.get('#scimrc').contains('MR').should('exist');
        //druga tabela homecal>kraj
        //homesch
        cy.get('#homesch').should('exist');
        cy.get('h1').contains('Free Online Calculators').should('exist');
        cy.get('form > table').contains('Search').should('exist');
        cy.get('#calcSearchTerm').should('exist');
        cy.get('input').should('exist');
        cy.get('#bluebtn').contains('Search').should('exist');
        cy.get('#calcSearchOut').should('exist');
    });
    //provera funcionalnosti buttona
    it('Button functionallity', () => {
        cy.get('[onclick="r(\'sin\')"]').click();
        cy.get('#sciInPut').contains(' sin(').should('exist');
      });

});
