/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import GoogleMap from 'google-map-react';

export default class Map extends React.Component {

    constructor(props) {
        super(props);

        this.defaults = {
            center: { lat: 33.7490, lng: -84.3880 },
            zoom: 10,
        };
    }

    onChildClick(key, childProps) {

    }


    render() {
        const { width, height } = this.props;
        const { getFilteredResources, displayResult, userLat, userLng, onGoogleApiLoad } = this.props;
        const filteredResources = getFilteredResources();

        const map = (
            <div style={{height, width}}>
         <GoogleMap
            defaultCenter={this.defaults.center}
            defaultZoom={this.defaults.zoom}
            hoverDistance={40}
            bootstrapURLKeys={{
            key: 'AIzaSyClWk0ocan4KfAoOA51Z0HDdIa847fhpTM',
            language: 'en'}}
            onChildClick={(key, childProp)=>displayResult(filteredResources[key])}
            onGoogleApiLoaded={({map, maps}) => onGoogleApiLoad(map, maps)}
            yesIWantToUseGoogleMapApiInternals>

            {filteredResources.map((result, i) =>
                  <Place
                          key={i}
                          lat={result.lat}
                          lng={result.lng}
                          text={i+1}
                          placename={result.name}/>
                          )}

            <Place lat={userLat} lng={userLng} text={"You"} key={-1} placename={"current location"} />

        </GoogleMap>
      </div>
        );
        return map;
    }
}

class Place extends React.Component {
    render() {

        const K_WIDTH = 15;
        const K_HEIGHT = 15;

        const styleHover = {
            // initially any map object has left top corner at lat lng coordinates
            // it's on you to set object origin to 0,0 coordinates
            position: 'absolute',
            width: K_WIDTH * 7,

            border: '3px solid #4DD0E1',
            backgroundColor: 'white',
            color: '#3f51b5',
            fontSize: 10,
            padding: 2
        };

        const style = {
            // initially any map object has left top corner at lat lng coordinates
            // it's on you to set object origin to 0,0 coordinates
            position: 'absolute',
            width: K_WIDTH,
            height: K_HEIGHT,
            left: -K_WIDTH / 2,
            top: -K_HEIGHT / 2,

            border: '3px solid #F06292',
            borderRadius: K_HEIGHT,
            backgroundColor: 'white',
            textAlign: 'center',
            color: '#3f51b5',
            fontSize: 12,
            fontWeight: 'bold',
            padding: 2
        };
        return (
            <div>
     <div style={this.props.$hover ? styleHover : style}>
        {this.props.$hover ? this.props.text+"."+this.props.placename : this.props.text}
     </div>
  </div>
        );
    }
};
