/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';
import MapContainer from '../Map/Map';

/* Styles imports */
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

/* Components imports */
import Header from '../Header/Header';
import About from '../About/About';
import Login from '../Login/Login';
import Search from '../Search/Search';

/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="fluid">
        
        <Header />
        <MapContainer />
        <Search /> 
        <Login />
        <About />

        
      </div>
    );
  }
}


export default App;
