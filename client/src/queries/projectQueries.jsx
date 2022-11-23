import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      name
      client {
        name
        id
        email
        phone
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    getProject(id: $id) {
      name
      description
      id
      client {
        name
        id
        email
        phone
      }
    }
  }
`;
