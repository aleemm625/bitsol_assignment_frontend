import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css';
import config from '../../utils/apiConfig';
import HomeUi from './Home.ui';

const Home = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedUser, setSelectedUser] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${config.baseURL}/user?pageNo=${page}`,
        );
        setUsers((prevUsers) => [...prevUsers, ...response.data]);
        //   setTotalItems(response.data.length);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [page]);

  const handleDelete = async (user) => {
    try {
      if (user.role === 'admin') {
        alert('You cannot delete admin users!');
        return;
      }
      const confirmDelete = window.confirm(
        'Are you sure you want to delete this user?',
      );

      if (!confirmDelete) {
        return;
      }
      await axios.delete(`${config.baseURL}/user/${user?._id}`);
      setUsers(users.filter((u) => u._id !== user?._id));
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    navigate('/user/edit', { state: { user } });
  };

  const handleScroll = ({ scrollTop, scrollHeight, clientHeight }) => {
    if (scrollTop === 0) {
      return;
    }
    if (scrollHeight - scrollTop === clientHeight) {
      loadMoreItems();
    }
  };

  const loadMoreItems = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <HomeUi
      styles={styles}
      handleCloseModal={handleCloseModal}
      handleViewUser={handleViewUser}
      handleScroll={handleScroll}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      isModalOpen={isModalOpen}
      totalItems={totalItems}
      setTotalItems={setTotalItems}
      selectedUser={selectedUser}
      users={users}
    />
  );
};

export default Home;
