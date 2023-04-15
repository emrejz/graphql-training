import { gql } from "@apollo/client";

export const addEvent = gql`
  mutation AddEvent($target: String!, $type: String!) {
    addEvent(target: $target, type: $type) {
      id
    }
  }
`;
