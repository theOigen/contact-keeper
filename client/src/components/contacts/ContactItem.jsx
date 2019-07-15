import React from 'react';
import PropTypes from 'prop-types';
import { Card, Badge, ListGroup, Button } from 'react-bootstrap';

const ContactItem = ({ contact }) => {
  const { name, email, phone, type } = contact;

  return (
    <Card className='mt-1'>
      <Card.Body>
        <Card.Title>
          {name}{' '}
          <Badge
            className='float-right'
            variant={type === 'professional' ? 'success' : 'primary'}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        </Card.Title>
        <ListGroup variant='flush'>
          {email && (
            <ListGroup.Item className='no-border pt-2 pb-2'>
              <i className='fas fa-envelope-open' /> {email}
            </ListGroup.Item>
          )}
          {phone && (
            <ListGroup.Item className='no-border pt-2 pb-2'>
              <i className='fas fa-phone' /> {phone}
            </ListGroup.Item>
          )}
        </ListGroup>
        <div className='d-flex justify-content-between'>
          <Button variant='dark' size='sm'>
            Edit
          </Button>
          <Button variant='danger' size='sm'>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
