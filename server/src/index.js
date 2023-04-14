import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import mongooseConnection from "./helpers/mongo.js";

dotenv.config();
await mongooseConnection();

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({});
await server.start();
app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) =>
  httpServer.listen({ port: process.env.PORT }, resolve)
);

console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/graphql`);
