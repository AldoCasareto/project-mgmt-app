import { GET_PROJECTS } from '../queries/projectQueries';
import { useQuery } from '@apollo/client';

const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  console.log(`data projects  = `, data);

  return <div></div>;
};

export default Project;
