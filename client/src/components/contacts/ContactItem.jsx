import React from 'react';
import PropTypes from 'prop-types';
import { Card, Badge, Button } from 'react-bootstrap';

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
