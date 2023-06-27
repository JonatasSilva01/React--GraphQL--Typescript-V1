import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: ".env.local" });
import "./data/dbConnecte.ts";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { ClientResolver } from "./Resolvers/ClientResovers";

async function main() {
  const schema = await buildSchema({
    resolvers: [ClientResolver],
    emitSchemaFile: path.resolve(__dirname, "scheme.ggl"),
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();
  console.log(`Server running on ${url}`);
}

main();
