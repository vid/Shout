/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import GoogleMap from 'google-map-react';

const K_WIDTH = 15;
const K_HEIGHT = 15;

const styleHover = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    marginBottom:10,
    position: 'relative',
    width: K_WIDTH * 15,
    border: '3px solid #BEBEBE',
    backgroundColor: 'white',
    color: '#000000',
    fontSize: 14,
    padding: 2,
    zIndex:1,
    WebkitBoxShadow: '-1px 1px 2px rgba(0,0,0,.2)'
};

const style = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates

    marginBottom:10,
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

export default class Place extends React.Component {

  constructor(props) {
      super(props);

  }

    returnMarker(clicked, keyThis){
      if(clicked){
      var resource=this.props.resource;
        return <div style={styleHover} onClick={({resource})=>this.props.onClickResult(this.props.resource)}>
                <b>{this.props.text+". "+this.props.placename}</b>
                <p>{this.props.address}</p>
                <p>{this.props.resource.phone}</p>
              </div>
      }else{
        return <div style={style}></div>
      }
    }
    render() {

      const {key, getClicked, onClickResult, resource}=this.props;
      const keyOn = getClicked();
      const keyThis=this.props.index;
      var clicked=false;
      if(keyThis==keyOn){
        clicked=true;
      }

        return (
            <div>
            {this.returnMarker(clicked, keyThis)}
            </div>
        );
    }
};
