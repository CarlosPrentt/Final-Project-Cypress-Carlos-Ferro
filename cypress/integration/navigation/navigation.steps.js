/// <reference types="cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

//Scenario #1
Given('the user is on demoblaze page', () => {
    cy.visit('/');
})

When('the user click on Home', () => {
    cy.contains('Home').click();
})

Then('a slider should be shown', () => {
    cy.get('.carousel-inner').should('be.visible');
})

//Scenario #2
Given('the user is on home page', () => {
    cy.visit('/');
})

When('the user click on Contact', () => {
    cy.get('.nav-link').contains('Contact').click();
})

Then('a window contact should be opened', () => {
    cy.get('label').contains('Contact Email:').should('be.visible');
})

//Scenario #3
Given('the user is on home page', () => {
    cy.visit('/');
})

When('the user click on About us', () => {
    cy.get('.nav-link').contains('About us').click();
})

Then('a window with a video player should be shown', () => {
    cy.get('.vjs-big-play-button').should('be.visible');
})

//Scenario #4
Given('the user is on home page', () => {
    cy.visit('/');
})

When('the user click on Cart', () => {
    cy.contains('Cart').click();
})

Then('a new page with products section should be shown', () => {
    cy.get('h2').contains('Products').should('be.visible');
})

//Scenario #5
Given('the user is on home page', () => {
    cy.visit('/');
})

When('the user click on Log in', () => {
    cy.get('.nav-link').contains('Log in').click();
})

Then('a window with username and password should be opened', () => {
    cy.get('#logInModalLabel').should('be.visible');
    cy.get('label[for="log-name"]').should('be.visible');
    cy.get('label[for="log-pass"]').should('be.visible');
})

//Scenario #6
Given('the user is on home page', () => {
    cy.visit('/');
})

When('the user click on Sign up', () => {
    cy.get('.nav-link').contains('Sign up').click();
})

Then('a window with the title Sign up should be displayed', () => {
    cy.get('#signInModalLabel').should('be.visible');
})