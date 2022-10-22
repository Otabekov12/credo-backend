const { gql } = require("apollo-server");

module.exports = gql`
  type Complex {
    id: ID!
    complex_name: String!
    complex_adress: String!
    price_squer: Int!
    room: [Rooms]
  }

  extend type Query {
    complex(company: ID!): [Complex]!
  }
  extend type Mutation {
    newComplex(
      complex_name: String!
      complex_adress: String!
      price_squer: Int!
      company_id: ID!
    ): Complex
  }
`;
