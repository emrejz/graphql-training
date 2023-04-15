import { GraphQLNonNull, GraphQLString } from "graphql";
import EventType from "../types/event.js";
import EventModel from "../../models/event.js";

export default {
  addEvent: {
    type: EventType,
    args: {
      target: { type: new GraphQLNonNull(GraphQLString) },
      type: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parent, args) => {
      const { target, type } = args;

      const event = new EventModel({
        target,
        type,
      });
      return await event.save();
    },
  },
};
