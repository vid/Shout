'use strict';

import React,  {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';

export default class ClinicPage extends React.Component {
  render () {
    const {result} = this.props;
    const {displaySearch} = this.props;

    return (
      <div>
        <div className="hello" onClick={displaySearch}>
          « Back to search
        </div>    
        {result.name}
      </div>
    );
  }
}
