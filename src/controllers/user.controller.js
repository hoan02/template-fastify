import User from "../models/user.model.js";

export const getAllUsers = async (request, reply) => {
  try {
    const users = await User.find();
    reply.send(users);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const getUserById = async (request, reply) => {
  try {
    const user = await User.findById(request.params.id);
    reply.send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const createUser = async (request, reply) => {
  try {
    const user = new User(request.body);
    const result = await user.save();
    reply.send(result);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const updateUser = async (request, reply) => {
  try {
    const user = await User.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });
    reply.send(user);
  } catch (error) {
    reply.status(500).send(error);
  }
};

export const deleteUser = async (request, reply) => {
  try {
    await User.findByIdAndDelete(request.params.id);
    reply.status(203).send("");
  } catch (error) {
    reply.status(500).send(error);
  }
};
