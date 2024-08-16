import Fastify from "fastify";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.routes.js";

const fastify = Fastify({
  logger: true,
});

// Connect to my database
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("Connected to the database"))
  .catch((e) => console.log("Error connecting to database", e));

// start my server
fastify.register(userRoutes, { prefix: "/api/v1/users" });

const start = async () => {
  try {
    await fastify.listen({
      port: process.env.PORT || 8080,
    });
    fastify.log.info(
      `Server is running on port ${fastify.server.address().port}`
    );
  } catch (error) {}
};

start();
