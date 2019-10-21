/*
 * Map app component
 */

/* Module imports */
import React, { Component } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';

/* Styles imports */
import './Map.css';
import 'materialize-css/dist/css/materialize.min.css';

const mapStyles = {
  width: '100%',
  height: '100%'
}

/* App component */

  export class MapContainer extends Component {
  render() {
    return (

      <div classname="map">
        <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 43.623662, lng: 7.077174 }}
        />
      </div>

    );
  }
}


export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);

