# Melakukan Pengujian Otomatisasi berbasis Web pada website FatSecret

untuk melihat fitur dari :

    Menghitung Kebutuhan Kalori
    Mengakses barpage
    Memakai Pencarian data dari search elemen

## Daftar Isi

- [Tools](#Tools)
- [Penggunaan](#penggunaan)
- [Dokumentasi](#dokumentasi)
- [Kode](#kode)

## Tools

Menginstal Tools yang diperlukan:

1. Cypress
2. Visual Studio Code

## Penggunaan

Cara menggunakan proyek ini:

1. Kunjungi [Fatsecret](https://www.fatsecret.co.id/Default.aspx?pa=rdic)
2. Manage Kode Script Automation di VS Code


## Dokumentasi
[Slide](https://www.canva.com/design/DAFxftLIJBI/1F-8-opb5McE8eRRWszzOQ/edit?utm_content=DAFxftLIJBI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Kode
```javascript
//
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
//
