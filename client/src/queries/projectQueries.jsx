import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      name
      client {
        name
        id
        email
      }
    }
  }
`;
