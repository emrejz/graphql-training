import { GraphQLObjectType } from "graphql";
import employeeMutations from "./employee.js";
import eventMutations from "./event.js";

export default new GraphQLObjectType({
  name: "Mutations",
  fields: {
    ...employeeMutations,
    ...eventMutations,
  },
});
