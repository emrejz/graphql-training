import { GraphQLObjectType } from "graphql";
import employeeMutations from "./employee.js";

export default new GraphQLObjectType({
  name: "Mutations",
  fields: {
    ...employeeMutations,
  },
});
