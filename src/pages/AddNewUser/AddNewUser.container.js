import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import config from '../../utils/apiConfig';
import styles from './AddNewUser.module.css';
import CreateEditUserForm from '../../components/CreateEditUserForm/CreateEditUserForm.container';
import { initialValues } from '../../utils/constants';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const AddNewUser = (props) => {
  const navigate = useNavigate();
  const [user] = useLocalStorage('user', null);
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${config.baseURL}/user`, values, {
        headers: {
          authorization: `Bearer ${user.access_token}`,
        },
      });
      if (response.data) {
        alert('user created successfully!');
      }
      navigate('/');
      return;
    } catch (error) {
      if (error.response.status === 500) {
        alert(error.response.data.error);
      }
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add User</h2>
      <CreateEditUserForm
        handleSubmit={handleSubmit}
        styles={styles}
        isCreateUser={true}
        initialValues={initialValues}
      />
    </div>
  );
};

export default AddNewUser;
