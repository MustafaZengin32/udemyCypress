describe('Assertion Practice', () => {

    it('first Practice', () => {

        cy.visit('https://shopist.io/');

        cy.title().should('eq','Shop.ist');

        cy.url().should('contain','shop');

        cy.get('section#main section > a > div > div:nth-child(1)').should('be.visible');

        cy.get('section#main section > a > div > div:nth-child(1)').should('be.visible').and('contain','Shop');

        cy.get('section#main section > a > div > div:nth-child(1)').should('have.text','Shop the look');

        cy.get('section#main section > a > div > div:nth-child(1)').should('have.length',1);

        cy.get('section#main div.jumbotron.jumbotron-large > a').should('have.attr','href','/department/chairs');

        






        
    });
    
});