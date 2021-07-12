import twilio from "twilio"
import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, TWILIO_TO_NUMBER } from '../constants.js'

const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export class SMS {
    sendSMS(item) {
        client.messages
        .create({
           body: `New ENS registered: ${item.name} - ${item.address}`,
           from: TWILIO_FROM_NUMBER,
           to: TWILIO_TO_NUMBER
         }, function(error, message) {
          // The HTTP request to Twilio will run asynchronously. This callback
          // function will be called when a response is received from Twilio
          // The "error" variable will contain error information, if any.
          // If the request was successful, this value will be "falsy"
          if (!error) {
              // The second argument to the callback will contain the information
              // sent back by Twilio for the request. In this case, it is the
              // information about the text messsage you just sent:
              console.log(`Success: ${message.sid} - ${message.dateCreated}`);
          } else {
              console.log(error);
          }
        })
    }
}