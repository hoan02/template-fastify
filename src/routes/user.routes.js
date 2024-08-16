import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";

async function routes(fastify, options) {
  fastify.get("/", getAllUsers);
  fastify.get("/:id", getUserById);
  fastify.post("/", createUser);
  fastify.put("/:id", updateUser);
  fastify.delete("/:id", deleteUser);
}

export default routes;
