import { GraphQLObjectType } from "graphql";
import employeeQueries from "./employee.js";
import eventQueries from "./event.js";

export default new GraphQLObjectType({
  name: "Queries",
  fields: {
    ...employeeQueries,
    ...eventQueries,
  },
});
