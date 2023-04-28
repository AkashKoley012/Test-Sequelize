const { User } = require("../models");

const getAllUsers = async () => {
    return await User.findAll();
};

const login = async (user) => {
    const loginUser = await User.findOne({ where: { name: user.name } });
    return loginUser;
};

const insertUser = async (user) => {
    return await User.create({
        name: user.name,
        role: user.role,
        password: user.password,
    });
};

const updateUser = async (user) => {
    const updateUser = await User.findByPk(user.id);
    updateUser.set({
        name: user.name,
        role: user.role,
        password: user.password,
    });
    return await updateUser.save();
};

const deleteUser = async (user) => {
    const deleteUser = await User.findByPk(user.id);
    return await deleteUser.destroy();
};

module.exports = {
    getAllUsers,
    login,
    insertUser,
    updateUser,
    deleteUser,
};
