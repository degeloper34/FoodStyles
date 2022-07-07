import {gql} from "@apollo/client";

const GET_CARDS_QUERY = gql`
  query {
    cards {
      id
      name
    }
  }
`;

export {GET_CARDS_QUERY};
