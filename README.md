# rick-and-morty-graphql

A platform that consumes Rick And Morty's API by using GraphQL &amp; ReactJS

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Acceptance TTD:

- The platform SHOULD show a list of Rick and Morty's characters sorted by default.
  - Every character should display: name, gender, status, species, image, id, button to delete it and another one to modify it. Link to the full review of the character.
- The platform SHOULD display a loading's animation meanwhile the list is loading.
- The platform SHOULD display an error's message if there has been a problem with the connection.
- The platform SHOULD display more characters when the user reach to the bottom of the page.
- The platform SHOULD allow users to look for characters by using a searcher.
- The platform SHOULD sort characters when the user set one or more fields like and click on the button to apply them:
  - Name. (input text)
  - Gender. (Male, Female, Genderless or unknown)
  - Status. (Alive, Dead or unknown)
  - Species. (Human, Alien, Humanoid, Vampire, Robot)
- The platform SHOULD allow the user to add a new character to the top of the list.
- The platform SHOULD allow the user to modify an existed character.
- The platform SHOULD allow the user to delete an existed character.
