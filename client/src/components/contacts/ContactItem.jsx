import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Badge, Button, Row, Container } from 'react-bootstrap';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent, current } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    if (current && current._id === _id) clearCurrent();
  };

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
            <Button
              variant='dark'
              size='sm'
              className='mr-2'
              onClick={() => setCurrent(contact)}
            >
              Edit
            </Button>
            <Button variant='danger' size='sm' onClick={onDelete}>
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
