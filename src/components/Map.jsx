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
            <div style={{height,width}}>
         <GoogleMap
            defaultCenter={this.defaults.center}
            defaultZoom={this.defaults.zoom}
            hoverDistance={20}
            bootstrapURLKeys={{
            key: 'AIzaSyClWk0ocan4KfAoOA51Z0HDdIa847fhpTM',
            libraries : 'places'}}
            onChildClick={(key, childProp)=>displayResult(filteredResources[key])}
            onGoogleApiLoaded={({map, maps}) => onGoogleApiLoad(map, maps)}
            yesIWantToUseGoogleMapApiInternals>

            {filteredResources.map((result, i) =>
                  <Place
                          key={i}
                          lat={result.lat}
                          lng={result.lng}
                          text={i+1}
                          placename={result.name}
                          address={result.civic_address}/>
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
            width: K_WIDTH * 15,
            border: '3px solid #4DD0E1',
            backgroundColor: 'white',
            color: '#3f51b5',
            fontSize: 14,
            padding: 2
        };

        const style = {
            // initially any map object has left top corner at lat lng coordinates
            // it's on you to set object origin to 0,0 coordinates

            marginBottom:'10',
            background: '#FFFFFF',
            display: 'inline-block',
            borderRadius: '14px 14px 14px 0',
            width: '8px',
            height: '8px',
            fontSize: 14,
            fontWeight: 'bold',
            border: '6px solid #F06292',
            WebkitTransform: 'rotate(-45deg)',
            MozTransform: 'rotate(-45deg)',
            MsTransform: 'rotate(-45deg)',
            OTransform: 'rotate(-45deg)',
            transform: 'rotate(-45deg)',
            position: 'absolute',
            WebkitBoxShadow: '-1px 1px 2px rgba(0,0,0,.2)'
        };
        return (
            <div>
     <div style={this.props.$hover ? styleHover : style}>
        {this.props.$hover ? <div>{this.props.text+"."+this.props.placename} <p>{this.props.address}</p></div>: ''}
     </div>
  </div>
        );
    }
};
