import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { FaUser } from 'react-icons/fa';

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
    <>
      <button
        type='button'
        className='btn btn-secondary'
        data-toggle='modal'
        data-target='#addClientModal'
      >
        <div className='d-flex align-items-center '>
          <FaUser className='icon' />
          <div> Add Client</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='addClientModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='addClientModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addClientModalLabel'>
                Create client{' '}
              </h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleForm}>
                <div className='mb-3'>
                  <label className='form-label'>Name</label>
                  <input
                    className='form-control'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                  />
                  <label className='form-label'>Email</label>

                  <input
                    className='form-control'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='text'
                  />
                  <label className='form-label'>Phone</label>
                  <input
                    className='form-control'
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type='text'
                  />
                  <button className='btn btn-sm btn-primary mt-2' type='submit'>
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClientModal;
