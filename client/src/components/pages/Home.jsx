import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
  return (
    <>
      <Row>
        <Col md={6}>
          <ContactForm />
        </Col>
        <Col md={6}>
          <ContactFilter />
          <Contacts />
        </Col>
      </Row>
    </>
  );
};

export default Home;
