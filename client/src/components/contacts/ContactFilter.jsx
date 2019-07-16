import React, { useContext, useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Form>
      <Form.Control
        ref={text}
        type='text'
        placeholder='Filter contacts...'
        onChange={onChange}
      />
    </Form>
  );
};

export default ContactFilter;
