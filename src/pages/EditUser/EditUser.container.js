import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import config from '../../utils/apiConfig';
import styles from './EditUser.module.css';
import CreateEditUserForm from '../../components/CreateEditUserForm/CreateEditUserForm.container';

const EditUser = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const id = values?._id;
      delete values?._id;
      const response = await axios.put(`${config.baseURL}/user/${id}`, values);
      if (response.data) {
        alert('user updated successfully!');
      }
      navigate('/');

      return;
    } catch (error) {
      if (error.response.status === 500) {
        alert(error.response.data.error);
      }
      console.error('Error Editing User:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Edit User</h2>
      <CreateEditUserForm
        handleSubmit={handleSubmit}
        styles={styles}
        isCreateUser={false}
        initialValues={user}
      />
    </div>
  );
};

export default EditUser;
