const { gql } = require("apollo-server");

module.exports = gql`
  type Users {
    id: ID!
    user_name: String!
    user_password: Int!
  }

  extend type Query {
    users: [Users]!
  }

  extend type Mutation {
    newUser(user_name: String!): Users
  }
`;
