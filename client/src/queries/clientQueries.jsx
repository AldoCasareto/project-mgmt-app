import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
  query getClients {
    clients {
      name
      id
      email
      phone
    }
  }
`;

export const GET_CLIENT = gql`
  query getClient($id: ID!) {
    getClient(id: $id) {
      name
      id
      phone
      email
    }
  }
`;
