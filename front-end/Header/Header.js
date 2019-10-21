/*
 * Header app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './Header.css';
import 'materialize-css/dist/css/materialize.min.css';


/* App component */
class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="container">
          <div className="row valign-wrapper menu">
              <div className="col l6 s12">
                  <img src="/img/cena-logo.png" alt="logo"></img>
              </div>
              <div className="col l6 s12">

                <img className="right icon" src="/img/search.png" alt="menu"></img>
                <img className="right icon" src="/img/menu.png" alt="menu"></img>
                 
              </div>
          </div>
      </div>
    );
  }
}

export default Header;
