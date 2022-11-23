import React, { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { useMutation, useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries/clientQueries';
import { CREATE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';

const AddProjectModal = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [status, setStatus] = useState('new');

  const { loading, data, error } = useQuery(GET_CLIENTS);

  const [addProject] = useMutation(CREATE_PROJECT, {
    variables: { client, name, description, status },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: { query: GET_PROJECTS },
        data: { projects: [...projects, addProject] },
      });
    },
  });

  const submitProject = (e) => {
    e.preventDefault();
    console.log(client, name, description, status);
    addProject(client, name, description, status);
    setName('');
    setClient('');
    setDescription('');
    setStatus('');
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-secondary'
        data-toggle='modal'
        data-target='#addProjectModal'
      >
        <div className='d-flex align-items-center '>
          <FaList className='icon' />
          <div>Add Project</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='addProjectModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='addProjectModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addProjectModalLabel'>
                Create Project
              </h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={submitProject}>
                <div className='mb-3'>
                  <label className='form-label'>Name</label>
                  <input
                    className='form-control'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                  />
                  <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea
                      className='form-control'
                      name='description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Status</label>
                    <select
                      id='status'
                      className='form-select'
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value='new'>Not Started</option>
                      <option value='progress'>In Progress</option>
                      <option value='completed'>Completed</option>
                    </select>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Client</label>
                    <select
                      value={client}
                      onChange={(e) => setClient(e.target.value)}
                      id='client'
                      className='form-select'
                    >
                      <option value=''>Select Client </option>
                      {data?.clients.map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name}
                        </option>
                      ))}
                    </select>
                  </div>
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

export default AddProjectModal;
