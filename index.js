//'use strict';

const functions = require('firebase-functions');

const {
    Card,
    Suggestion,
  	SimpleResponse
} = require('dialogflow-fulfillment');

const {
    dialogflow,
    Carousel,
    Image
} = require('actions-on-google');
const app = dialogflow();

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

app.intent('Aena', conv=>{
  conv.ask('Desde git');
});
