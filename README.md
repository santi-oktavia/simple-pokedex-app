This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

*Created by Santi O Pangaribuan

## Available Scripts

For run locally, please do these steps from command line:
1. Install all the npm packages
### `npm install`
2. Run the application
### `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Component
1. Home: This component displays list of pokemon. This component gets data from API.
2. PokemonItem: This component displays image and name of the pokemon. Data for this component is gotten from API. This component is called in Home component.
3. DetailPokemon: This component displays detail of Pokemon. You can get this view by click name of the pokemon from Home page.
4. ImageModal: After click the pokemon image in DetailPokemon, this component will be displayed. This component consists of pokemon images.

## library
1. Axios for getting API
2. Router for application routing
3. Bootstrap for view