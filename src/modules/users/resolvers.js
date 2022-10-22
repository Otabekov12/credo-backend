const model = require("./model");

module.exports = {
  Query: {
    users: async () => {
      try {
        let users = await model.allUser();
        return users;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    newUser: async (_, { user_name }) => {
      try {
        let addUser = await model.addUser(user_name);
        return addUser;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
