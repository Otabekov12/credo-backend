const { gql } = require("apollo-server");

module.exports = gql`
  type Duration {
    id: ID!
    pay_time: Int!
  }

  extend type Query {
    duration: [Duration]!
  }
`;
