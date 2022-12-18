import React, { useState, useEffect } from 'react';
import { Paper, Container, TextField, Button } from '@material-ui/core';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editProfile, singleUserData } from '../services/request';
import { Stack } from '@mui/material';

const EditUserForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const paperStyle = {
    padding: '10px 20px 40px',
    width: 600,
    margin: '20px auto',
  };
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const { firstName, lastName, email, phoneNumber } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await editProfile(id, user);
    navigate('/');
  };

  const loadUser = async () => {
    const result = await singleUserData(id);
    setUser(result.data);
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Update Form</h1>

        <form onSubmit={(e) => onSubmit(e)}>
          <Stack spacing={2}>
            <TextField
              id='outlined-basic'
              label='Firstname'
              name='firstName'
              value={firstName}
              onChange={(e) => onInputChange(e)}
              variant='outlined'
              required
            />
            <TextField
              id='outlined-basic'
              label='Lastname'
              name='lastName'
              value={lastName}
              onChange={(e) => onInputChange(e)}
              variant='outlined'
              required
            />
            <TextField
              id='outlined-basic'
              label='Email'
              name='email'
              value={email}
              onChange={(e) => onInputChange(e)}
              variant='outlined'
              required
            />
            <TextField
              id='outlined-basic'
              label='Number'
              name='phoneNumber'
              value={phoneNumber}
              onChange={(e) => onInputChange(e)}
              variant='outlined'
              required
            />
            <Button type='submit' variant='contained'>
              Update User
            </Button>
            <Link to='/' variant='contained'>
              Cancel
            </Link>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default EditUserForm;
