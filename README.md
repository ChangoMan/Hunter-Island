This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Hunter Island

## Notes

### JSX

Starting with a Class based React Component, we will return some JSX:

```
class App extends React.Component {
  render() {
    return <div>hunter island</div>
  }
}
```

https://reactjs.org/docs/introducing-jsx.html

JSX produces React "Elements". There can only be 1 element returned.

You can input any valid [JavaScript Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) inside the curly braces in JSX

You cannot put if/else inside the curly braces. You can move that logic outside of the `return`.

### React Elements

https://reactjs.org/docs/rendering-elements.html

Elements are the smallest building blocks of React apps.

A React Component is made up of React Elements.

Looking into ReactDOM.render in `index.js` and `<div id="root"></div>` that's in `public/index.html`

### React State

Adding state to the Class based component.

Displaying the state below the main form.

### Handling Events

https://reactjs.org/docs/handling-events.html

Adding `changeFirstName () => {}` and the onChange to the first name input box. Console log `event` at various stages.

### Creating the FormField Component

Intro into Functional React Components, which are simpler to write. A functional component is essentially just the `render(){}` method part of a React Class Component.

Explore passing in props to a Functional Component.

### Create the Box Component

Looking at the `children` prop and how it works.
