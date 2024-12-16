describe('Temel Komutlar cy.visit', () => {

    it('Base URL\'e gitmeli', () => {

        cy.visit('/commands/actions'); 

        cy.get('button[type="submit"]').click();

    
    });
   

});




