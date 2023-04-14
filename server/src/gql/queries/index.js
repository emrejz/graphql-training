import { GraphQLObjectType } from "graphql";
import employeeQueries from "./employee.js";

export default new GraphQLObjectType({
  name: "Queries",
  fields: {
    ...employeeQueries,
  },
});
