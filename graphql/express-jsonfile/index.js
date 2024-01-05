const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const schema = buildSchema(`
  type User {
    username: String
    age: Int
    sex: String
    address: String
  }
  type Query {
    hello: String
    height: Int
    accountInfo: User
  }
`);
const root = {
  hello: () => {
    return "hello graphql test";
  },
  height: () => {
    return 288;
  },
  accountInfo: () => {
    return {
      username: "hsieh chia",
      age: 22,
      sex: "girl",
      address: "sichuan, chengdu",
    };
  },
};
const app = express();
// 指定静态文件目录（例如，public 文件夹）
app.use(express.static("public"));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(3000, () => {
  console.log("http://localhost:3000/graphql");
});
