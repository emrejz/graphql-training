import { GraphQLNonNull, GraphQLString } from "graphql";
import EmployeeType from "../types/employee.js";
import EmployeeModel from "../../models/employee.js";

export default {
  addEmployee: {
    type: EmployeeType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      surname: { type: new GraphQLNonNull(GraphQLString) },
      pic: { type: new GraphQLNonNull(GraphQLString) },
      role: { type: GraphQLString },
    },
    resolve(parent, args) {
      const { name, surname, pic, role } = args;

      const employee = new EmployeeModel({
        name,
        surname,
        pic,
        role,
      });
      return employee.save();
    },
  },
};
