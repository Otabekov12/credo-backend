const { gql } = require("apollo-server");

module.exports = gql`
  type Company {
    id: ID!
    company_name: String!
    complex: [Complex]
  }

  extend type Query {
    company: [Company]
  }

  extend type Mutation {
    newCompany(company_name: String!): Company
  }
`;
