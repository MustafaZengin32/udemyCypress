/*

*/

describe('Before After Kullanimi', () => {

    before(() => {

        cy.log('Before Kullanimi-Cy');
        
        cy.visit('https://automationexercise.com/');
    });

    after(() => {
        cy.log("After Kullanimi-Cy");
    });

    it('Basligi Dogrula', () => {
        
        cy.title().should('eq','Automation Exercise');

    });
    
});