import User from "../../model/user/user.model";

export const findAllUsers = async () => {
  return await User.find();
};

export const createUser = async (userData: { name: string; email: string }) => {
  return await User.create(userData);
};
