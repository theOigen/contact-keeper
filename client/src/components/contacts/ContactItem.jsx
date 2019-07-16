import React from 'react';
import PropTypes from 'prop-types';
import { Card, Badge, Button, Row, Container } from 'react-bootstrap';

const ContactItem = ({ contact }) => {
  const { name, email, phone, type } = contact;

  return (
    <Card className='mt-1' bg='light'>
      <Card.Body>
        <Card.Title>
          {name}{' '}
          <Badge
            className='float-right'
            variant={type === 'professional' ? 'success' : 'info'}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        </Card.Title>
        <ul className='list'>
          {email && (
            <li>
              <i className='fas fa-envelope-open' /> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className='fas fa-phone' /> {phone}
            </li>
          )}
        </ul>
        <Container>
          <Row>
            <Button variant='dark' size='sm' className='mr-2'>
              Edit
            </Button>
            <Button variant='danger' size='sm'>
              Delete
            </Button>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
