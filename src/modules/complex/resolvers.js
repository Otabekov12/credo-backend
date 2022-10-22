const model = require("./model");
const room = require("../rooms/model");

module.exports = {
  Query: {
    complex: async () => {
      try {
        let complex = await model.allComplex();
        return complex;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    newComplex: async (_, { complex_name, complex_adress, price_squer, company_id }) => {
      try {
        let addComplex = await model.addComplex(
          complex_name,
          complex_adress,
          price_squer,
          company_id
        );
        return addComplex;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Complex: {
    id: (g) => g.id,
    complex_name: (g) => g.complex_name,
    complex_adress: (g) => g.price_squer,
    price_squer: (g) => g.price_squer,
    room: async (g) => await room.complexRooms(g.id),
  },
};
