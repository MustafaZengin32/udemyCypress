describe('Back-Forward', () => {

    it('back-forward command', () => {
        
        cy.visit('https://shopist.io/');

        cy.viewport(1200,1000);

        cy.get('div#__nuxt a.chairs > div > div').click();

        cy.location('pathname').should('contain','chairs');

        cy.go('back') //anasayfaya donecek
        cy.title().should('eq', "Shop.ist");

        cy.go('forward') //chairs sayfasina gidecek
        cy.location('pathname').should('contain','chairs');

        cy.go(-1) //anasayfaya donecek
        cy.title().should('eq', "Shop.ist");

        cy.go(1) //chairs sayfasina gidecek
        cy.location('pathname').should('contain','chairs');

    });
    
});