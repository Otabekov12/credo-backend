const model = require("./model");

module.exports = {
  Query: {
    duration: async () => {
      try {
        let duration = await model.getDuration();
        return duration;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
