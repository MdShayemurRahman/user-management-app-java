import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            User Management Application
          </Typography>
        </Toolbar>
      </AppBar>

      <ul>
        {location.pathname === '/' ? (
          <li>
            <Link to='/addUser'>Add User</Link>
          </li>
        ) : (
          <li>
            <Link to='/'>List Users</Link>
          </li>
        )}
      </ul>

      <Outlet />
    </>
  );
};

export default Navbar;

/*



*/
