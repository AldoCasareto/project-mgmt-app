import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $client: ID!
  ) {
    addProject(name: $name, description: $description, status: $status, client: $client) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      name
      id
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!, $name: String!, $description: String!, $status: String!) {
    updateProject(name: $name, description: $description, status: $status, client: $client)
  }
  {
    id
    name
    description
    status
    client {
      id
      name
      email
      phone
    }
  }
`;
