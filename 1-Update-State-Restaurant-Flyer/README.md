# React State Restaurant Lab 🍟🍗🥓🍔

## Overview 👀
To help visualize the flow of data from React state to DOM, we will be working with a class component's constructor to store and update our state. Using the `setState()` function, we can update the state and React will re-render the page using the latest data stored in the state.

* Note: We will only be working in the App component and the state within this component.

## Goals 🎯
- Render state data inside of JSX curly braces.
- Utilize the `componentDidUpdate()` function to perform a fetch.
- Utilize the `setState()` function to update the state.

## Getting Started 🏃🏽‍♀️
After cloning the repo, `cd` into it and run `npm install` and `npm start`. Open [http://localhost:3000](http://localhost:3000) and you should see a pretty bare page with some missing information. Back in the React code, open src/App.js and you will find some starter code for the App component. Take a look in the constructor and find the `this.state` declaration for our restaurant object. The state's default restaurant is one of my favorite places in Austin, TX, Donkey Mo's 🤤. We will begin by rendering this data to the DOM using the JSX curly braces in the App component's render function. 

## Deliverables 🚚
- Render state data inside of the JSX curly braces. 
- Fetch new restaurant data on using the `componentDidMount()` function and update the state using setState() to trigger re-render. 
- Make the "Get Restaurant Info" button perform a fetch when clicked and update state with new restaurant data. 

## Fetch URL 🐕
This URL `https://random-data-api.com/api/restaurant/random_restaurant` is where our new restaurant data will come from. 












