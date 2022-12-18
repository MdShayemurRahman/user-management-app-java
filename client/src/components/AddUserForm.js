import React, { useState } from 'react';

// validate form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Paper, Container, TextField, Button } from '@material-ui/core';
import { addNewUser } from '../services/request';
import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

const AddUserForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNewUser(user);
    navigate('/');
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>User Form</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Stack spacing={2}>
            <TextField
              id='outlined-basic'
              label='Firstname'
              name='firstName'
              value={firstName}
              onChange={(e) => onInputChange(e)}
              variant='outlined'
            />
            {/* <span>{errors?.firstName?.message}</span> */}
            <TextField
              id='outlined-basic'
              label='Lastname'
              name='lastName'
              value={lastName}
              onChange={(e) => onInputChange(e)}
              variant='outlined'
            />
            <TextField
              id='outlined-basic'
              label='Email'
              name='email'
              value={email}
              onChange={(e) => onInputChange(e)}
              variant='outlined'
            />
            <TextField
              id='outlined-basic'
              label='Number'
              name='phoneNumber'
              value={phoneNumber}
              onChange={(e) => onInputChange(e)}
              variant='outlined'
            />
            <Button type='submit' variant='contained'>
              Add User
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

export default AddUserForm;
