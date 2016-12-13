/* jslint node: true, esnext: true */
'use strict';

import React from 'react';

import {cyan500} from 'material-ui/styles/colors';
import GoogleMap from 'google-map-react';

export default class Map extends React.Component {

  constructor (props) {
    super(props);


    this.defaults = {
      center: {lat: 33.7490, lng: -84.3880},
      zoom: 9,
      greatPlaceCoords: {lat: 33.724465, lng: -83.080121},
    };
  }

  onGoogleApiLoad(){

    this.geocoder = new google.maps.Geocoder();
  }

  geocodeAddress(address){

 }


  render() {
    const {width, height} = this.props;
    const {getFilteredResources} = this.props;
    const filteredResources = getFilteredResources();

    const m = (
      <div style={{height, width}}>
         <GoogleMap
            defaultCenter={this.defaults.center}
            defaultZoom={this.defaults.zoom}
            hoverDistance={40}
            bootstrapURLKeys={{
            key: 'AIzaSyClWk0ocan4KfAoOA51Z0HDdIa847fhpTM',
            language: 'en'}}
            onGoogleApiLoaded={this.onGoogleApiLoad}>

            {filteredResources.map((result, i) =>
                  (<Place lat={result.lat}
                          lng={result.lng}
                          text={i+1} />))}
        </GoogleMap>
      </div>
    );
    return m;
  }
}

 class Place extends React.Component {
  render() {
    const K_WIDTH = 20;
    const K_HEIGHT = 20;

    const styleHover = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,

    border: '5px solid #4DD0E1',
    borderRadius: K_HEIGHT,
    backgroundColor: '#B2EBF2',
    textAlign: 'center',
    color: cyan500,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4
  };

  const style = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #F06292',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};
  return (
     <div style={this.props.$hover ? styleHover : style}>
        {this.props.text}
     </div>
    );
  }
};
