/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import FlatButton from 'material-ui/FlatButton';


export default class Logout extends React.Component {

  render() {

    return (

      <div>
        <FlatButton
          label={"Logout"}
          style={this.props.style}
          onTouchTap={()=>this.props.handleLogout()} />
      </div>
    )

  }

}
