# Party In Ooo

Jake and Finn are holding a HUGE party under their treehouse, and you're invited!! What a great time to meet some of the A-list players in the kingdom!

Just one thing...it's WAY TOO LOUD in the basement to do anything but see people's faces! We need a way to bring someone up to the treehouse so we can actually get to learn a little bit about them...let's see what we can do!

## Clear, Concise, Coding Checkpoint Concept Clarification (The six C's?)

After completing this lab we should have explored using React to render a collection of data as cards through a container component. We should be more familiar with the differences of accessing props through a `functional component` and a `class component`, as well as using an array of data to create a dynamic collection of data displaying components on our front end.

## Instructions to install/run go here

Make sure you cd into this repository before you run
```
npm install
npm start
```
and in another terminal you'll need to run
```
json-server -w db.json -p 3001
```

This should launch our React server on `localhost:3000` and our json-server on `localhost:3001`. Hit those two endpoints to make sure you are seeing our empty template and some data respectively, and let's get this party started! Our goal is to start at this:

<img src="./src/images/starting-point.gif" width="200px">

 Which is an empty, non-fun, un-exciting place to be. 
 
 But once we fill it out with our party go-ers and our hook up our event listener to meet people in our casual hangout area, we should get something that looks a lot like this!

<img src="./src/images/complete-demo.gif" width="200px">

## Core Deliverables

- In the `App` component, fetch the array of users from the `db.json` at the `/characters` endpoint and set them in state to `allCharacters`. 

- Selecting any 1 character of your choice from that array, set one character object as the `displayCharacter` in state.

- Get the `displayCharacter` state passed to the `CharacterDisplay` component and get the character information rendered appropriately in the `CharacterDisplay` component.

- Pass `AllCharacters` into the `CharacterCardContainer`, and us `allCharacters` to create a `CharacterCard` for each character in the `CharacterCardContainer`. This component should be passed the relevent information to display.

- Create an event listener that sets a new character object to `displayCharacter` every time their `CharacterCard` is clicked.

All the locations where data is needed (and what that data should be) are marked with comments. 

Take note of if a component is a functional or class component and what that means with how you would access it's props.


/////////////////////////////////////////////////////////////////////////////////////////////
REAL README IS HERE

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
