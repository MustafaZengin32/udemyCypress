describe('ViewPort Kullanimi', () => {


    it('viewPort with Number', () => {

        cy.viewport(1200,1000);

        cy.visit('https://shopist.io/');//normalde 1000-660 geliyordu

        
    });

    it('viewPort with String', () => {

        cy.viewport('macbook-16');

        cy.visit('https://shopist.io/');
        
    });
    
    
});

//Default icin config e atama yapariz.
  //viewportHeight: 1200,
  //viewportWidth: 1500,

/**
 * ViewPortun calistigi String Degerler
 * macbook-15

Ekran boyutu: 1440 x 900
macbook-13

Ekran boyutu: 1280 x 800
macbook-11

Ekran boyutu: 1366 x 768
ipad-2

Ekran boyutu: 768 x 1024 (Portrait)
Landscape modu: { orientation: 'landscape' }
ipad-mini

Ekran boyutu: 768 x 1024 (Portrait)
Landscape modu: { orientation: 'landscape' }
iphone-6+

Ekran boyutu: 414 x 736 (Portrait)
Landscape modu: { orientation: 'landscape' }
iphone-6

Ekran boyutu: 375 x 667 (Portrait)
Landscape modu: { orientation: 'landscape' }
iphone-5

Ekran boyutu: 320 x 568 (Portrait)
Landscape modu: { orientation: 'landscape' }
iphone-4

Ekran boyutu: 320 x 480 (Portrait)
Landscape modu: { orientation: 'landscape' }
iphone-se2

Ekran boyutu: 375 x 667 (Portrait)
Landscape modu: { orientation: 'landscape' }
iphone-x

Ekran boyutu: 375 x 812 (Portrait)
Landscape modu: { orientation: 'landscape' }
iphone-xr

Ekran boyutu: 414 x 896 (Portrait)
Landscape modu: { orientation: 'landscape' }
iphone-12

Ekran boyutu: 390 x 844 (Portrait)
Landscape modu: { orientation: 'landscape' }
samsung-note9

Ekran boyutu: 414 x 846 (Portrait)
Landscape modu: { orientation: 'landscape' }
samsung-s10

Ekran boyutu: 360 x 760 (Portrait)
Landscape modu: { orientation: 'landscape' }
 */

