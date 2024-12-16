//Bir elementi locate etmek icin locator kullanilir
//Copy Css Selector locator bulmak icin etkili bir chrome eklentisi
//https://www.saucedemo.com/v1/ ornek sayfa olarak kullanilabilir
//Ilk olarak istenilen element uzerinde sag tik ile copy css selector deriz
//Daha sonra teyid icin inspect edip , find bolumune bunu yapistiririz
//Biz bir element alirsak ve bu element ten birden fazla var ise cy bize uyari verir, mesela bu elementten 2 tane var gibi
//class name ve id de eslesen sadece bitane var ise kullanilmasi tercih edilir

describe('Cypress Locator', () => {

    it('Html Element Location', () => {

        cy.visit('https://www.saucedemo.com/v1/'); 

        cy.get('#user-name').type('Mustafa');//id ile locator almak icin id nin basina # koyariz

        cy.get('input#password').type('12345');//copy css selector kullaninca basina . veya # kullanmaya gerek yok
                                            //class locate ederken basina . koyariz
        cy.get('#login-button').click();

        /**
         * <input type="password" class="form_input" data-test="password" id="password" name="password" placeholder="Password" autocorrect="off" autocapitalize="none" value="">
         * Ornegin passwordu almak icin name kullanmak istersen  input[name="password"] bu sekilde almalisin
         * Tag --> name -->attribute --> input[name="password"]
         */
    });

    

});




