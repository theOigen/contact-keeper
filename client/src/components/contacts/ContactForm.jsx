import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const onChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact({ name: '', email: '', phone: '', type: 'personal' });
  };

  const { name, email, phone, type } = contact;

  return (
    <Form onSubmit={onSubmit}>
      <h2 className='text-center'>Add contact</h2>
      <Form.Control
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <br />
      <Form.Control
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <br />
      <Form.Control
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <br />
      <h5>Contact type</h5>
      <Form.Check
        inline
        name='type'
        type='radio'
        value='personal'
        label='Personal'
        onChange={onChange}
        checked={type === 'personal'}
      />
      <Form.Check
        inline
        name='type'
        type='radio'
        value='professional'
        label='Professional'
        onChange={onChange}
        checked={type === 'professional'}
      />
      <Button
        variant='outline-primary'
        type='submit'
        className='btn-block mt-3'
      >
        Add Contact
      </Button>
    </Form>
  );
};

export default ContactForm;
