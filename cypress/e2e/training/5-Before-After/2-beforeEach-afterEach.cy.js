//BeforeEach her bir it den once , AfterEach herbir it den sonra
describe('Before After Kullanimi', () => {

    beforeEach(() => {

        cy.log('Before Kullanimi-Cy');
        
        cy.visit('https://automationexercise.com/');
    });

    afterEach(() => {
        cy.log("After Kullanimi-Cy");
    });

    it('Basligi Dogrula', () => {
        
        cy.title().should('eq','Automation Exercise');

    });

    it('Url Dogrula', () => {
        
        cy.url().should('include','automation');

    });


});