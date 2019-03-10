This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for client side app, and uses an Express server to serve the CMS content.

## Available Scripts

In the root directory, you can run:

### `npm run client-install`

Can be executed after running **npm install** on root directory. Alternatively, one can go into the 'client' directory and execute 'npm install' there.

### `npm run dev`

Runs both the server as well as the client side app in development mode.<br>
Open http://localhost:3000 to view the app in browser. The server runs on port 3001.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build:client`

Builds the app for production to the `client/build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Tech Stack

This project uses following tech stack:

### BACKEND

**express with graphql**

The backend consists of GraphQL Queries exposed at https://localhost:3001/graphql.

### FRONTEND

**React, React Router, Apollo Client for GraphQL**
Client application uses create-react-app build, coupled with GraphQL interfaces using Apollo Client

**Helmet**
For setting title and meta descriptions on pages for crawlers and SEO purposes.

**react-a11y**
For accessibility checks

**styled components**
For CSS in JS, and global styling of the app

Have tried to include use of some react concepts like Hooks, Higher Order Components, Render Props etc. Since this was a very small project, I had to compromise with code consistency to include as many variations of doing stuff as possible.

### TESTING

Some sample test cases have been included to ensure some code coverage is provided. This app employs Jest test runner with Enzyme.
