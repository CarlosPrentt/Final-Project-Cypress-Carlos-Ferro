/// <reference types="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const timeout = 30000;
//Scenario #1
Given('the user is on home page', () => {
    cy.visit('/');
})

Given('the user can watch categories displayed', () => {
    cy.get('.list-group').should('be.visible');
})

When('the user click on Phones, Laptops or Monitors categories', () => {
    cy.get('#itemc').contains('Phones').click();
    cy.get('img[src="imgs/galaxy_s6.jpg"]', { timeout: timeout }).should('be.visible')
    cy.get('a').contains('Laptops').click();
    cy.get('img[src="imgs/sony_vaio_5.jpg"]', { timeout: timeout }).should('be.visible')
    cy.get('a').contains('Sony vaio i5').should('be.visible');
    cy.get('a').contains('Monitors').click();
    cy.get('img[src="imgs/apple_cinema.jpg"]', { timeout: timeout }).should('be.visible')
    cy.get('a').contains('Apple monitor 24').should('be.visible');
})

Then('images of them should be displayed', () => {
    cy.get('#tbodyid').should('be.visible');
})

//Scenario #2
Given('the user is on a category', () => {
    cy.visit('/');
    cy.get('.list-group').should('be.visible');
})

When('the user select a product', () => {
    cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a', { timeout: timeout }).should('be.visible').click();
})

Then('a new page with the product should be shown', () => {
    cy.get('strong', { timeout: timeout }).contains('Product description').should('be.visible');
})

//Scenario #3
Given('the user is on a product selected page', () => {
    cy.visit('/');
    cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a', { timeout: timeout }).should('be.visible').click();
})

When('the user click on Add to cart', () => {
    cy.get('a[onclick="addToCart(1)"]', { timeout: timeout }).contains('Add to cart').should('be.visible').click();
})

Then('the product should be added to the cart', () => {
    cy.on('window:alert', (text) => {
        expect(text).to.contains('Product added').should('be.visible');
      });
})

//Scenario #4
Given('the user added products to the cart', () => {
    cy.visit('/');
    cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a', { timeout: timeout }).should('be.visible').click();
    cy.get('a[onclick="addToCart(1)"]', { timeout: timeout }).contains('Add to cart').should('be.visible').click();
    cy.get('a').contains('Cart').click();
})

When('the user click on Place Order', () => {
    cy.get('button', { timeout:timeout }).contains('Place Order').should('be.visible').click();
})

Then('a buy window should be opened', () => {
    cy.get('#orderModalLabel').should('be.visible');
})

//Scenario #5
Given('the user added a product to the cart', () => {
    cy.visit('/');
    cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a', { timeout: timeout }).should('be.visible').click();
    cy.get('a[onclick="addToCart(1)"]', { timeout: timeout }).contains('Add to cart').should('be.visible').click();
    cy.on('window:alert', (text) => {
        expect(text).to.contains('Product added').click();
      });
    cy.get('a').contains('Cart').click();
})

When('the user click on Delete', () => {
    cy.get('#tbodyid > tr > td:nth-child(4) > a', { timeout: timeout }).contains('Delete').click();
})

Then('the cart should be empty', () => {
    cy.get('#totalp').should('not.be.visible');
})