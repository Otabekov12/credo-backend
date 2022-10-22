const model = require("./model");

module.exports = {
  Query: {
    rooms: async () => {
      try {
        let rooms = await model.allRooms();
        return rooms;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    newRooms: async (_, { rooms_number }) => {
      try {
        let addRooms = await model.addRooms(rooms_number);
        return addRooms;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
