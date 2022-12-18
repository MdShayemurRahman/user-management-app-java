import React, { useState, useEffect } from 'react';
import { deleteProfile, getAllUsers } from '../services/request';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Container,
  Divider,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const User = () => {
  

  const [users, setUsers] = useState([]);

  const getUserList = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteProfile(id);
      const newList = users.filter((user) => user.id !== id);
      setUsers(newList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  console.log(users);
  return (
    <Container>
      {users.map((user) => (
        <List
          key={user.id}
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='' />
            </ListItemAvatar>
            <ListItemText
              primary={user.firstName + ' ' + user.lastName}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    {user.email}
                  </Typography>
                  {' — '} {user.phoneNumber}
                </React.Fragment>
              }
            />

            <IconButton edge='end' aria-label='edit'>
              <Link to={`/user/update/${user.id}`}>
                <EditIcon />
              </Link>
            </IconButton>

            <IconButton
              onClick={() => handleDeleteUser(user.id)}
              edge='end'
              aria-label='delete'
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <Divider variant='inset' component='li' />
        </List>
      ))}
    </Container>
  );
};

export default User;
