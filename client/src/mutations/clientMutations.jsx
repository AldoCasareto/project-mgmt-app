import { gql } from '@apollo/client';

export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      name
      id
    }
  }
`;

export const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

export const EDIT_CLIENT = gql`
  mutation updateClient($id: ID!, $name: String!, $email: String!, $phone: String!) {
    addClient(id: $id, email: $email, phone: $phone, name: $name)
  }
`;
