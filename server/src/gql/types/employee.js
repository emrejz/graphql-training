import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "Employee",
  description: "Common employee type",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    pic: { type: GraphQLString },
    vote: { type: GraphQLInt },
  }),
});
