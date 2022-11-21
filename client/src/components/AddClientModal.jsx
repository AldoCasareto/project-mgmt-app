import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

const AddClientModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const handleForm = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) return alert('please fill all the fields');

    addClient(name, email, phone);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        Name
        <input name='name' value={name} onChange={(e) => setName(e.target.value)} type='text' />
        Email
        <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type='text' />
        Phone
        <input name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} type='text' />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default AddClientModal;
