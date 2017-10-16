var accountSid = "";
var authToken = "";
// var client = require('twilio');

let url = "https://api.twilio.com/2010-04-01/Accounts/ACebb6ec186e9eb445f028f383dc5d6dc0/Messages";

export function sendSMS(data, phoneNumberString) {

    //TODO: Validate phone number string is in correct format

    console.log(phoneNumberString);

    $.ajax({
        type: 'POST',
        url: url,
        data: {
            "To" : "+1" + phoneNumberString,
            "From" : "14044589195",
            "Body" : formatData(data)
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(accountSid + ':' + authToken));
        },
        success: function(data) {
            console.log(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
}

function formatData(data) {
    var formattedString = "";
    formattedString = formattedString + data.name + "\n";
    formattedString = formattedString + data.phone + "\n";
    formattedString = formattedString + data.civic_address;
    console.log(formattedString);
    return formattedString;
}
