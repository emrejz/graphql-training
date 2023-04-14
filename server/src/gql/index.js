import { GraphQLSchema } from "graphql";
import query from "./queries/index.js";
import mutation from "./mutations/index.js";

export default new GraphQLSchema({
  query,
  mutation,
});
