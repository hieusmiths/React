
import React, { Component } from 'react';
// import logo from './logo.svg';
import './../css/App.css';
import Nav from './Nav';
// import Home from './Home';
import Footer from './Footer';
// import News from './New';
// import Contact from './Contact';
// import NewDetail from './NewDetail';
import RouteUrl from '../router/RouteUrl';
import { BrowserRouter as Router,  } from "react-router-dom";


class App extends Component {

  render() {
    return (
      
        <Router>
          <Nav />
          
          <RouteUrl />
          
          <Footer />
        </Router>
      
    );
  }
}

export default App;
