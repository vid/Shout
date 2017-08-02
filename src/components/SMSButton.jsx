import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import 'whatwg-fetch';

var accountSid = "ACebb6ec186e9eb445f028f383dc5d6dc0";
//NOTE: This should probably not be stored here
var authToken = "";
// var apiBase = "https://" + accountSid + ":" + authToken + "@" + "api.twilio.com/2010-04-01/";
var apiBase = "https://api.twilio.com/2010-04-01/";
var msgID = "MG6e0a9b462fbb5eec64e2694a50bfe6e5";

export default class SMSButton extends React.Component {

    sendSMS() {
        fetch(apiBase + "Accounts/" + accountSid + "/Messages", {
            method: 'POST',
            // credentials: "include",
            body: {
                To: "",
                MessagingServiceSid: msgID,
                Body: "Test"
            }
        })
    }

    render() {

        return (

            <RaisedButton
                primary={true}
                onTouchTap={() => this.sendSMS()}
                label='Send SMS'>
            </RaisedButton>

        )

    }

}
