/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import GoogleMap from 'google-map-react';

import Place from './Place.jsx';

export default class Map extends React.Component {

    constructor(props) {
        super(props);

        this.defaults = {
            center: { lat: 33.7490, lng: -84.3880 },
            zoom: 10,
        };

        this.state = {
          clicked:-10
        }
    }

    onChildClick(key, childProps) {
      this.setState({clicked:key});
    }

    onClickResult(result){
      console.log(result);
      this.props.displayResult(result);
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
            onChildClick={(key, childProp)=>this.onChildClick(key, childProp)}
            onGoogleApiLoaded={({map, maps}) => onGoogleApiLoad(map, maps)}
            yesIWantToUseGoogleMapApiInternals>

            {filteredResources.map((result, i) =>
                  <Place
                          index={i}
                          getClicked={()=>this.state.clicked}
                          onClickResult={(res)=>this.onClickResult(res)}
                          resource={filteredResources[i]}
                          lat={result.lat}
                          lng={result.lng}
                          text={i+1}
                          placename={result.name}
                          address={result.civic_address}/>
                          )}

            <Place getClicked={()=>this.state.clicked}
                   onClickResult={()=>console.log("do nothing")}
                  resource={" "}
                  lat={userLat}
                  lng={userLng}
                  text={"You"}
                  key={-1}
                  placename={"current location"} />

        </GoogleMap>
      </div>
        );
        return map;
    }
}
