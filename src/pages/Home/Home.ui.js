import { Backdrop, Box, Fade, Modal } from '@mui/material';
import React from 'react';
import { AutoSizer, List } from 'react-virtualized';

import UserListItem from '../../components/UserListItem/UserListItem.container';

const HomeUi = (props) => {
  const {
    styles,
    users,
    handleDelete,
    handleViewUser,
    handleEdit,
    handleScroll,
    handleCloseModal,
    isModalOpen,
    selectedUser,
  } = props;

  const modalBoxStyle = {
    borderRadius: '10px',
    position: 'absolute',
    width: '40vw',
    height: '30vh',
    top: '30%',
    left: '30%',
    overflow: 'auto',
    // transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const cardsPerRow = 3;

  const rowRenderer = ({ index, key, style }) => {
    const startIndex = index * cardsPerRow;
    const endIndex = Math.min(startIndex + cardsPerRow, users.length);
    const rowUsers = users.slice(startIndex, endIndex);

    return (
      <div
        key={key}
        style={{ ...style, display: 'flex', justifyContent: 'space-evenly' }}
      >
        {rowUsers.map((user) => (
          <UserListItem
            user={user}
            handleDelete={handleDelete}
            handleViewUser={handleViewUser}
            handleEdit={handleEdit}
            styles={styles}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* <h1>User List</h1> */}
      <div className={styles.userListContainer}>
        <div style={{ height: '90vh', width: '100%' }}>
          {
            <AutoSizer>
              {({ height, width }) => {
                return (
                  <List
                    width={width}
                    height={height}
                    rowCount={Math.ceil(users.length / cardsPerRow)}
                    // rowCount={users.length}
                    rowHeight={200}
                    rowRenderer={rowRenderer}
                    onScroll={handleScroll}
                  />
                );
              }}
            </AutoSizer>
          }
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={modalBoxStyle}>
            <div>
              <div>Id: {selectedUser?._id} </div>
              <div>Name: {selectedUser?.name} </div>
              <div>Email: {selectedUser?.email} </div>
              <div>Role: {selectedUser?.role} </div>
              <div>Phone Number: {selectedUser?.phoneNo} </div>
              <br />
              {selectedUser &&
                selectedUser?.addresses &&
                selectedUser?.addresses.map((address, index) => (
                  <div key={index}>
                    <div>AddressLine1: {address?.addressLine1} </div>
                    <div>AddressLine2: {address?.addressLine2} </div>
                    <div>City: {address?.city} </div>
                    <div>State: {address?.state} </div>
                    <div>Country: {address?.country} </div>
                    <br />
                  </div>
                ))}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default HomeUi;
