const express = require('express');
const { ApolloServer } = require('apollo-server-express'); // Used to create a GraphQL server and the ApolloServer class, which we will use to instantiate our server.
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas'); // Imports the type definitions and resolvers for our GraphQL API.
const db = require('./config/connection'); // Imports the database connection object.

const PORT = process.env.PORT || 3001;
const app = express();
// Creates a new instance of the ApolloServer class.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Supports the client side 
// Adds middleware to the Express.js app that serves static files from the client/build directory if the server is running in a production environment.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// // Route handler for the root URL path.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Takes in the type definitions and resolvers for the GraphQL API.
const startApolloServer = async (typeDefs, resolvers) => {
  try {
    await server.start(); // Starts the Apollo server.
    server.applyMiddleware({ app }); // Applies its middleware to the Express.js app - '/graphql'

    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
  } catch (error) {
    console.error('Failed to start Apollo Server', error);
  }
};

// Call the async function to start the server.
startApolloServer(typeDefs, resolvers);