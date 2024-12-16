describe('Temel Komutlar cy.visit', () => {

    it('Base URL\'e gitmeli', () => {

        cy.visit('/commands/actions'); // baseUrl tanımlı ise sadece "/" yeterli //config de tanimladik 
                                       //Ek olarak / den sonra path i yazariz

        console.log(cy.title());                               

        cy.title().should('contain','Cypress');      //eq ve contain komutlarida var                         

    });
   

});




