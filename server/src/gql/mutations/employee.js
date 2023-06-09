import { GraphQLNonNull, GraphQLString, GraphQLID } from "graphql";
import EmployeeType from "../types/employee.js";
import EmployeeModel from "../../models/employee.js";

export default {
  addEmployee: {
    type: EmployeeType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      surname: { type: new GraphQLNonNull(GraphQLString) },
      pic: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      address: { type: GraphQLString },
      role: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
      const { name, surname, pic, role, email, address } = args;

      const employee = new EmployeeModel({
        name,
        surname,
        pic,
        role,
        email,
        address,
      });
      return await employee.save();
    },
  },
  voteEmployee: {
    type: EmployeeType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: async (parent, args) => {
      const { id } = args;

      return await EmployeeModel.findByIdAndUpdate(
        id,
        { $inc: { vote: 1 } },
        { new: true }
      );
    },
  },
};
