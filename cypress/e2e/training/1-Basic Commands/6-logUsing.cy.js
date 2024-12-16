describe('Temel Komutlar cy.log', () => {

    it('log kullanimi', () => {

        cy.visit('/commands/actions'); 

        cy.log('Mesaj , output yazdirmak icin kullandim');
        
    });
   

});




