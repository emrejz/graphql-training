import { gql } from "@apollo/client";

export const getEmployees = gql`
  query Employees {
    employees {
      id
      name
      surname
      pic
      role
      vote
    }
  }
`;

export const getEmployee = gql`
  query Employee($id: ID) {
    employee(id: $id) {
      id
      name
      surname
      pic
      role
      address
      email
      vote
    }
  }
`;
