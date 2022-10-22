const { gql } = require("apollo-server");

module.exports = gql`
  type Banks {
    id: ID!
    banks_name: String!
    credit_limit: Int!
    credit_duration: Int!
    starting_payment: Int!
  }

  extend type Query {
    banks: [Banks]
  }

  extend type Mutation {
    newBank(
      banks_name: String!
      credit_limit: Int!
      credit_duration: Int!
      starting_payment: Int!
    ): Banks
  }
`;
