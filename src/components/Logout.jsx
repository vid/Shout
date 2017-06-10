/* jslint node: true, esnext: true */
'use strict';

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


export default class Logout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogOpen: false
    }
  }

  logout() {
    this.setState({
      dialogOpen: true
    })
  }

  handleClose() {
    this.setState({
      dialogOpen: false
    })
    this.props.handleLogout()
  }

  render() {

    const actionButton = <FlatButton
                            label="OK"
                            primary={true}
                            onTouchTap={()=>this.handleClose()}
                          />

    return (

      <div>
        <FlatButton
           label="Logout"
           style={this.props.style}
           onTouchTap={()=>this.logout()}
        />

        <Dialog
           title="Logout Successful!"
           actions={actionButton}
           modal={false}
           open={this.state.dialogOpen}
           onRequestClose={()=>this.handleClose()}
       >
         Logout completed Successfully!
       </Dialog>

      </div>
    )

  }

}
