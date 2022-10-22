const { gql } = require("apollo-server");

module.exports = gql`
  type Rooms {
    id: ID!
    rooms_number: Int!
    room_square: Int!
  }

  extend type Query {
    rooms(complexRooms: ID!): [Rooms]!
  }
`;
