const typeDefs = `
type User {
    _id: ID!
    username: String!
    pin: Int!
}

type Item {
    _id: ID!
    name: String!
    price: Int!
    stock: Int!
}
`;

module.exports = typeDefs;