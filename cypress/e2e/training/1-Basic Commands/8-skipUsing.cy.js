describe('Temel Komutlar cy.log', () => {

    it('Base URL\'e gitmeli', () => {

        cy.visit('/commands/actions'); 

        cy.get('button[type="submit"]').click();

    });

    it.skip('log kullanimi', () => {

        cy.visit('/commands/actions'); 

        cy.log('Mesaj , output yazdirmak icin kullandim');
        
    });

    //skip ile yalnizca describe icindeki it.skip icindeki testler gormezden gelinir , gecilir ,calismaz
    //ayni zamanda skip ve only i describe seviyesindede calistirabiliriz.
    //Ornegin 3 tane describe var icinde birden fazla it var , bir tanesini only ya da skip yapabiliriz
    //Boylece only yazilan sadece calisir , skip yazilan gormezden gelinir ve digerleri calisir

});




