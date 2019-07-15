import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Contacts from '../contacts/Contacts';

const Home = () => {
  return (
    <>
      <Row>
        <Col>{/* Form Here */}</Col>
        <Col>
          <Contacts />
        </Col>
      </Row>
    </>
  );
};

export default Home;
