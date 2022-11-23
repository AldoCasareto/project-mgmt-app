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
