import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <Contacts />
        </Col>
      </Row>
    </>
  );
};

export default Home;
