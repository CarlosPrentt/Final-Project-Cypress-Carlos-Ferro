/// <reference types="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

//Scenario #1
Given('the user is in the demoblaze page', () => {
    cy.visit('/');
}) 

When('the user is in homepage', () => {
    cy.get('#nava').should("be.visible");
})

Then('a carousel should be shown', () => {
    cy.get('.carousel-inner').should('be.visible');
})

//Scenario #2
Given('the user is in homepage', () => {
    cy.visit('/');
}) 

When('the user watch the carousel', () => {
    cy.get('.carousel-inner').should('be.visible');
})

Then('three sliderbars should be shown', () => {
    cy.get('.carousel-indicators').should('be.visible');
})

//Scenario #3
Given('the user is in homepage', () => {
    cy.visit('/');
}) 

When('the user click on an arrow button', () => {
    cy.get('.carousel-control-next').should('be.visible').click();
})

Then('a different image should be displayed', () => {
    cy.get('img[src="nexus1.jpg"]').should('be.visible');
})