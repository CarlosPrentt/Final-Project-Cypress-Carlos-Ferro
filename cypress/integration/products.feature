Feature: Products Test

    As a user I want to go to the different categories, select a product, adding it to a cart, buying the cart and remove elements form cart

    Scenario: Categories selection
        Given the user is on home page
        And the user can watch categories displayed
        When the user click on Phones, Laptops or Monitors categories 
        Then images of them should be displayed

    Scenario: Product selection
        Given the user is on a category
        When the user select a product
        Then a new page with the product should be shown

    Scenario: Adding product to cart
        Given the user is on a product selected page
        When the user click on Add to cart
        Then the product should be added to the cart

    Scenario: Buying cart
        Given the user added products to the cart
        When the user click on Place Order
        Then a buy window should be opened
    
    Scenario: Removing element from cart
        Given the user added a product to the cart
        When the user click on Delete
        Then the cart should be empty