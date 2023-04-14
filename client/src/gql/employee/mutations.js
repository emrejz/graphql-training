import { gql } from "@apollo/client";

export const voteEmployee = gql`
  mutation VoteEmployee($id: ID!) {
    voteEmployee(id: $id) {
      id
      vote
    }
  }
`;
