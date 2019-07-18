import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const NavBar = props => {
  const { title, icon } = props;
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <>
      <Nav.Link as={Link} to='/' eventKey='home'>
        Home
      </Nav.Link>
      <Nav.Link as={Link} to='/about' eventKey='about'>
        About
      </Nav.Link>
      <NavDropdown title={user && user.name}>
        <NavDropdown.Item onClick={onLogout}>
          <i className='fas fa-sign-out-alt' /> Logout
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const guestLinks = (
    <>
      <Nav.Link as={Link} to='/register' eventKey='register'>
        Register
      </Nav.Link>
      <Nav.Link as={Link} to='/login' eventKey='login'>
        Login
      </Nav.Link>
    </>
  );

  return (
    <Navbar bg='primary' variant='dark' expand='md' sticky='top'>
      <Navbar.Brand>
        <i className={icon} /> | {title}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav
          className='ml-auto md-flex-column'
          defaultActiveKey={isAuthenticated ? 'home' : 'login'}
        >
          {isAuthenticated ? authLinks : guestLinks}
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
