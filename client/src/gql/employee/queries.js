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
