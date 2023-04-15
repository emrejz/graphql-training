import { GraphQLList } from "graphql";
import EventModel from "../../models/event.js";
import EventType from "../types/event.js";

export default {
  events: {
    type: new GraphQLList(EventType),
    resolve: async (parent, args) => {
      return await EventModel.find({});
    },
  },
};
