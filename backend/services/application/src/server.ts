import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import executableSchema from './schema';

const PORT = 4000;

const server = new ApolloServer({
  schema: executableSchema,
});

const app = express();

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app });

app.listen({ port: PORT }, (): void =>
  console.log(`Listening on port ${PORT} (http://localhost:${PORT}/graphql)`)
);
