const model = require("./model");

module.exports = {
  Query: {
    banks: async () => {
      try {
        let banks = await model.allBanks();
        return banks;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    newBank: async (_, { banks_name, credit_limit, credit_duration, starting_payment }) => {
      try {
        let addBank = await model.addBank(
          banks_name,
          credit_limit,
          credit_duration,
          starting_payment
        );
        return addBank;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
