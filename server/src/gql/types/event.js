import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export default new GraphQLObjectType({
  name: "Event",
  description: "Common event type",
  fields: () => ({
    id: { type: GraphQLID },
    type: { type: GraphQLString },
    target: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});
