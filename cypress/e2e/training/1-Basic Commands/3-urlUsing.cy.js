describe('Temel Komutlar cy.visit', () => {

    it('Base URL\'e gitmeli', () => {

        cy.visit('/commands/actions'); 

        cy.url().should('eq','https://example.cypress.io/commands/actions');  

        cy.url().should('include','/commands'); 

    });
   

});




