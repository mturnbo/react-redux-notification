import React from 'react';
import {
  HashRouter as Router,
  Route, NavLink
} from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import NotificationContainer from 'containers/NotificationContainer';
import './App.scss';

const App = () => (
  <Router>
    <div className="app-container">
      <h1>React Redux Notification System</h1>
      <ul className="navigation">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
      <NotificationContainer />
    </div>
  </Router>
);

export default App;
