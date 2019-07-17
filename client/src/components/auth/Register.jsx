import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_2: ''
  });

  const { name, email, password, password_2 } = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password_2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      console.log('Register submit');
    }
  };

  return (
    <div className='form-container'>
      <h1 className='text-center'>Account Register</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type='text'
            name='name'
            placeholder='Enter a name'
            value={name}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type='email'
            name='email'
            placeholder='Enter an email'
            value={email}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type='password'
            name='password'
            placeholder='Enter a password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type='password'
            name='password_2'
            placeholder='Repeat password'
            value={password_2}
            onChange={onChange}
            minLength='6'
          />
        </Form.Group>
        <Button type='submit' variant='primary' className='btn-block'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
