const { ApolloServer } = require("apollo-server");

const { PORT } = require("./config");
const modules = require("./modules");

const server = new ApolloServer({
  modules,
});

server.listen(PORT, () => console.log(PORT));
