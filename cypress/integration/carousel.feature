Feature: Carousel Test

    As user I want to validate if there is a carousel displayed which has three images and it can change its images with a button

    Scenario: Carousel is displayed
        Given the user is in the demoblaze page
        When the user is in homepage
        Then a carousel should be shown

    Scenario: Carousel has three images
        Given the user is in homepage
        When the user watch the carousel
        Then three sliderbars should be shown

    Scenario: Carousel can change images
        Given the user is in homepage
        When the user click on an arrow button
        Then a different image should be displayed