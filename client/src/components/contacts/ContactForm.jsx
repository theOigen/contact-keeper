import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  return <Form />;
};

export default ContactForm;
