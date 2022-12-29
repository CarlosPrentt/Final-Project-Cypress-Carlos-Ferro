Feature: Navigation Test

    As a user I want to navigation through all the different headers links on demoblae page

    Scenario: Go to home page
        Given the user is on demoblaze page
        When the user click on Home
        Then a slider should be shown

    Scenario: Go to contact page
        Given the user is on home page
        When the user click on Contact
        Then a window contact should be opened

    Scenario: Go to about us page
        Given the user is on home page
        When the user click on About us
        Then a window with a video player should be shown
    
    Scenario: Go to cart
        Given the user is on home page
        When the user click on Cart
        Then a new page with products section should be shown

    Scenario: Go to log in
        Given the user is on home page
        When the user click on Log in
        Then a window with username and password should be opened
    
    Scenario: Go to sign up
        Given the user is on home page
        When the user click on Sign up
        Then a window with the title Sign up should be displayed