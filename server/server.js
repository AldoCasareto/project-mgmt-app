import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';
import cors from 'cors';
import { connectDb } from './config/db.js';
import colors from 'colors';

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
dotenv.config();
connectDb();

app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, () => console.log(`connected at ${PORT}`));
