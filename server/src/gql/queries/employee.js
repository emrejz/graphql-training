import { GraphQLID, GraphQLList } from "graphql";
import EmployeeModel from "../../models/employee.js";
import EmployeeType from "../types/employee.js";

export default {
  employee: {
    type: EmployeeType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return EmployeeModel.findById(args.id);
    },
  },
  employees: {
    type: new GraphQLList(EmployeeType),
    resolve(parent, args) {
      return EmployeeModel.find({});
    },
  },
};
