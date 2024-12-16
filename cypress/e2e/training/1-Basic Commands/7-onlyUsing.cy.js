describe('Temel Komutlar cy.log', () => {

    it('Base URL\'e gitmeli', () => {

        cy.visit('/commands/actions'); 

        cy.get('button[type="submit"]').click();

    });

    it.only('log kullanimi', () => {

        cy.visit('/commands/actions'); 

        cy.log('Mesaj , output yazdirmak icin kullandim');
        
    });

    //Only ile yalnizca describe icindeki it.only icindeki testler calisir , digerlerini gormez
   

});




