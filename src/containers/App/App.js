import React from 'react';
import {HashRouter as Router, Route, NavLink, browserHistory} from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
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
        </div>
      </Router>
    );
  }
}

export default App;
