/// <reference types="cypress" />

describe('Kalkulator Kebutuhan Kalori', () => {
    it('Menghitung Kalori', () => {
        cy.visit('https://www.fatsecret.co.id/Default.aspx?pa=rdic')
        cy.get('#ctl12_Age').type(24)
        cy.get('#ctl12_WeightKg').type(56)
        cy.get('#ctl12_HeightCm').type(170)
        cy.get('#ctl12_Sex_1').check()
        cy.get('#ctl12_Goal').select('Peningkatan berat badan secara perlahan')
        cy.get('#ctl12_PhysicalLevel_0').check()
        cy.get('.middle').click()

        cy.get('h1').should('contain.text','Angka Kecukuoan Gizi Anda adalah: ')
    });
    it('Access Page Makanan', () => {
        cy.visit('https://www.fatsecret.co.id/Default.aspx?pa=rdic')
        cy.get('.menuItem.sepLeft').contains('a', 'Makanan').click();
        cy.url().should('include','kalori-gizi/')
        cy.contains('Keju & Susu').click()
        cy.url().should('include','grup/keju%C2%A0-susu')
        cy.contains('Keju Parmesan').click()
        cy.get('h1').should('contain.text','Kalori dalam Keju Parmesan')        
    });

    it('Melakukan Searching Pencarian', () => {
        cy.visit('https://www.fatsecret.co.id/Default.aspx?pa=rdic')
        cy.get('#multiSearchText').type('kue pisang')
        cy.get('img[src="https://m.ftscrt.com/static/images/def20/But_Search_Grey_default.png"]').click();
        cy.get('.title').should('contain.text','Pencarian Makanan')
        cy.contains('Pisang Goreng').click()
        cy.get('h1').should('contain.text','Pisang Goreng')
    });
});