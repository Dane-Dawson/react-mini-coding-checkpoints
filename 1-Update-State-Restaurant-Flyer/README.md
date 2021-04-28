# React State Restaurant Lab 🍟🍗🥓🍔

## Overview 👀
To help visualize the flow of data from React state to DOM, we will be working with a class component's constructor to store and update our state. Using the `setState()` function, we can update the state and React will re-render the page using the latest data stored in the `state`.

* Note: We will only be working in the `App` component, using (but not manually altering) the `state` within this component.

## Goals 🎯
- Render data from `state`.
- Utilize the `onClick()` event listener to perform a fetch.
- Utilize the `setState()` function to update the state and trigger a re-render.

## Unnecesary Plot

Tom is looking to spread his passive income opportunities, and decided on trying his hand in some marketing. 

Since paper restaurant flyers are an annoyance to people and nature alike, he is working on a digital replacement instead...but, being a developer, Dane is also fairly lazy. After outsourcing the flyer design, he wants to make it dynamically adjustable to any restaurant without him having to update the design again manually.

In `state` is an object that holds a lot of information about a restaurant. We need to get that information visible on the page so people can peruse the restaurants information first, so we can showcase the concept.

Then, Dane has set up an API endpoint with a backlog of restaurants (okay, it's a randomized API, but pretend for the stories sake) that he wants you to connect to the "Get Restaurant Info" button to update the flyer with new restaurant information.

As a hint, the object recieved from the fetch EXACTLY matches the current state, which may be useful when you are setting state.

## Getting Started 🏃🏽‍♀️
After cloning the repo, `cd` into this sub-folder (1-Update_State_Restaurant_Flyer) it and run `npm install` and `npm start`. Open [http://localhost:3000](http://localhost:3000) and you should see a pretty bare page with some missing information. 

In your code editor, open src/App.js and you will find some starter code for the `App` component. Take a look in the constructor and find the `this.state` declaration for our restaurant object. The state's default restaurant is one of my favorite places in Austin, TX, Donkey Mo's 🤤. Our first focus is rendering this data to the DOM using the hints in the JSX curly braces in the `App` component's render function. 

## Deliverables 🚚
- Render `state` data inside of the `App` component appropriately. 
- Make the "Get Restaurant Info" button perform a fetch when clicked that updates `state` with new restaurant data object. 

## Fetch URL 🐕
This URL `https://random-data-api.com/api/restaurant/random_restaurant` is where our new restaurant data will come from. 












