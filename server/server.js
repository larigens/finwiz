const { ApolloServer } = require('@apollo/server'); // Used to create a GraphQL server and the ApolloServer class, which we will use to instantiate our server.
const { expressMiddleware } = require('@apollo/server/express4'); // Used to create a GraphQL server and the ApolloServer class, which we will use to instantiate our server.
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer'); // Used to create a GraphQL server and the ApolloServer class, which we will use to instantiate our server.
const http = require('http');
const cors = require('cors');
const { json } = require('body-parser');

const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas'); // Imports the type definitions and resolvers for our GraphQL API.
const db = require('./config/connection'); // Imports the database connection object.
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = http.createServer(app);

// Creates a new instance of the ApolloServer class.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

// Supports the client side 
// Adds middleware to the Express.js app that serves static files from the client/build directory if the server is running in a production environment.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build/')));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Route handler for the root URL path.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
  try {
    await server.start(); // Starts the Apollo server.
    app.use(
      '/graphql',
      cors(),
      json(),
      expressMiddleware(server, {
        context: authMiddleware,
      }),
    );
    db.once('open', () => {
      new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
      console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    })
  } catch (error) {
    console.error('Failed to start Apollo Server', error);
  }
}
// Call the async function to start the server.
startApolloServer(typeDefs, resolvers);