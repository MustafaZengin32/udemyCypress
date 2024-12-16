//describe -->Test Suit
//it-->her bir it blogu bizim test case'simiz
//describe-->Mocha
//Her komutu da it blogu icine yazacagiz


describe('Temel Komutlar cy.visit', () => {

    it('Base URL\'e gitmeli', () => {

        cy.visit('/commands/actions'); // baseUrl tanımlı ise sadece "/" yeterli //config de tanimladik 
                                       //Ek olarak / den sonra path i yazariz

    });

});

/*
describe('Temel Komutlar cy.visit', () => {

    it('Base URL\'e gitmeli', () => {

        cy.visit('https://example.cypress.io/'); //baseUrl config de tanimlanmadi ise url in tamami yazilir

    });

});

*/


/*
describe('Temel Komutlar cy.visit', () => {

    it('Base URL\'e gitmeli', () => {
        cy.visit({
        url   :  'https://example.cypress.io/',
        method:'GET'            
        }); 

    });

});

*/



