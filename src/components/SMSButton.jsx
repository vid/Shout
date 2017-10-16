/* jslint node: true, esnext: true */
'use strict';

import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as smsUtils from '../utils/sms.js';

export default class SMSButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            phoneNumber: ""
        };
    }

    OKButtonPressed(data) {
        // this.setState({open: true});
        console.log(this.state.phoneNumber);
        smsUtils.sendSMS(data, this.state.phoneNumber);
        this.setState({open: false});
    }

    smsButtonPressed() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handlePhoneInput(event, newValue) {
        console.log(newValue)
        this.setState({phoneNumber: newValue});
    }

    render() {

        const actions = [
          <FlatButton
            label="Ok"
            primary={true}
            keyboardFocused={true}
            onClick={() => this.OKButtonPressed(this.props.data)}
          />,
        ];

        return (
            <div style={{zIndex:1, top:150, right:10, position:'absolute'}}>
                <RaisedButton
                  onTouchTap={() => this.smsButtonPressed(this.props.data)}
                  label='Send SMS'/>
                <Dialog title="Enter your phone number"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={() => this.handleClose()}>
                        Please enter a phone number:
                     <TextField value={this.state.phoneNumber}
                                inputStyle={{textAlign: 'center'}}
                                onChange={(event, newValue) => this.handlePhoneInput(event, newValue)} />
                </Dialog>
            </div>
        )
    }

}
