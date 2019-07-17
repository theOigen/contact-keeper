import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = () => {
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
    console.log('Login submit');
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
            controlId='emailValidation'
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
            controlId='passwordValidation'
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
