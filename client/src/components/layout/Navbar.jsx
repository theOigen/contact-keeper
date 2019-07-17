import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = props => {
  const { title, icon } = props;

  return (
    <Navbar bg='primary' variant='dark' expand='md' sticky='top'>
      <Navbar.Brand>
        <i className={icon} /> | {title}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto md-flex-column' defaultActiveKey='home'>
          <Nav.Link as={Link} to='/' eventKey='home'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/about' eventKey='about'>
            About
          </Nav.Link>
          <Nav.Link as={Link} to='/register' eventKey='register'>
            Register
          </Nav.Link>
          <Nav.Link as={Link} to='/login' eventKey='login'>
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

NavBar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
};

export default NavBar;
