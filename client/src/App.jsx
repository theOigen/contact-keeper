import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Container>
      </>
    </Router>
  );
};

export default App;
