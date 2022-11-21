import { GET_CLIENTS } from '../queries/clientQueries';
import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import Loading from './Loading';

const Clients = () => {
  const { loading, data, error } = useQuery(GET_CLIENTS);

  if (loading) return <Loading />;
  if (error) return <p>Something went wrong!</p>;

  console.log(data.clients);

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
