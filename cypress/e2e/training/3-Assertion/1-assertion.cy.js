/**
 * Implicit Assertion
 * Explicit Assertion
 * Comman Assertion
 */

/*Implicit Assertion
*cy.get('#loginButton').should('have.class', '.active').and('have.attr', 'href', '/login')
*have.class-->class i active mi 
*and ile assertion in devami yazilir , ekstra sorgulama 
*and in icinde yazan ise href attributu /login mi diye sorgular
*/

/**
 * expect(true).to.be.true
 * const employee = {name: 'Tom', age: 30}
   assert.isObject(employee, 'value is object')
 */

/*Common Assertions

length: should('have.length', 10)

class: should('have.class', 'enabled')
       should('not.have.class', 'disabled')

value: should('have.value', 'Musti Can')

text content: should('contain', 'Musti')
              should('not.contain', 'Ali')

visibility: should('be.visible')

state: should('be.checked')

css doğrulama: should('not.have.css', 'display', 'none')
*/  