import React from 'react';
import { Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faPenToSquare,
  faSquareMinus,
} from '@fortawesome/free-solid-svg-icons';

const UserListItem = (props) => {
  const { handleDelete, handleViewUser, handleEdit, user, styles } = props;

  return (
    <Card
      className={styles.card}
      key={user._id}
      style={{ maxWidth: 345, marginBottom: 20 }}
    >
      <CardContent>
        <Typography
          style={{ color: '#333' }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {user.name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ color: '#666' }}
        >
          User ID: {user._id}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Email: {user.email}
        </Typography>
      </CardContent>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: '0 16px' }}
        className={styles.actions}
      >
        <Grid item>
          <IconButton
            aria-label="edit"
            className={styles.iconButton}
            onClick={() => handleEdit(user)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="delete"
            className={styles.iconButton}
            style={{ color: '#bc544b' }}
            onClick={() => handleDelete(user)}
          >
            <FontAwesomeIcon icon={faSquareMinus} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="view"
            className={styles.iconButton}
            style={{ color: '#3eb489' }}
            onClick={() => handleViewUser(user)}
          >
            <FontAwesomeIcon icon={faEye} />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserListItem;
