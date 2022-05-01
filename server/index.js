require("dotenv").config();
const cron = require("node-cron");
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const Logger = require("../shared/logger");

/****** Import Application ******/
const application = require("./application");
const schema = application.createSchemaForApollo();

/******* Database Connection ******/
const databaseURL = process.env.MONGODB_URL;

async function startServer() {
  const app = express();
  app.disable("x-powered-by");
  app.use(cors());

  app.use(express.json());

  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });

  await mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  Logger.info(`🙈 Mongoose Connected`);

  app.listen({ port: 4000 }, () => {
    Logger.info(`🚀 Server ready at http://localhost:4000`);
  });
}

startServer();
