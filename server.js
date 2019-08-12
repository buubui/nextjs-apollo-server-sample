const express = require('express');
const next = require('next');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    apolloServer.applyMiddleware({ app });

    app.get('*', (req, res) => {
      return handle(req, res);
    });

    app.listen(process.env.PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
