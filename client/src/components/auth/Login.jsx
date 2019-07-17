import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else {
      login(user);
    }
  };

  return (
    <div className='form-container'>
      <h1 className='text-center'>Account Login</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            required
            placeholder='Enter an email'
            value={email}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            required
            placeholder='Enter a password'
            value={password}
            onChange={onChange}
          />
        </Form.Group>
        <Button type='submit' variant='primary' className='btn-block'>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
