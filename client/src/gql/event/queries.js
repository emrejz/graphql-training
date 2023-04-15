import { gql } from "@apollo/client";

export const getEvents = gql`
  query Events {
    events {
      id
      type
      target
      date
    }
  }
`;
