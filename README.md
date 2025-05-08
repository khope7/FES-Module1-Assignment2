Hello! Here are the tasks for Module1 Assignment2

# Overview
Project has two pages with the first consisting of products pulled from fakestore api from the api.ts file that take products and arrange them based on product category as well as initalize cart functionality from button press

## API.ts
Uses Axios method to call products catelog using React Query(Homepage.tsx, APP.tsx)

## components/NavBar
NavBar folder consisting of Navbar stylelizing and Navigation functionality to be used globally

## components/Context/CartContext
Uses State Management And redux toolkit to add remove and clear cart items to cart and context API with sessionstorage to send data to Shopping Cart page

## components/Context/ProductContext
Uses State Management And redux toolkit to set products and select product categories from the homepage

## components/pages/CartPage
Has css stylelizing and Cartpage functionality, using useCart method to pass in Cart Context API

## components/pages/HomePage
Has css stylelizing and HomePage functionality, using useProductContext method to pass in Products Context API

## types/types
Initializes all product variables along with Rating object

## App
Wrapping QueryClientProvider, ProductProvider, CartProvider, BrowserRouter, and Routes to HomePage and CartPage for data integration and gloabal access along with Webpage navigation functionality

## Main
Used to call App and run project

### Additional
Unsure how to clear current errors, error handling implemented within contexts, Project current works on run