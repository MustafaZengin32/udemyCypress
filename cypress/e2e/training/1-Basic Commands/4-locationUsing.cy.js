describe('Temel Komutlar cy.visit', () => {

    it('Base URL\'e gitmeli', () => {

        cy.visit('/commands/actions'); 

        cy.location('pathname').should('eq','/commands/actions');

        cy.location('protocol').should('eq','https:');//gidilen protokolu dogrular

        cy.location('hostname').should('eq','example.cypress.io');





    });
   

});




