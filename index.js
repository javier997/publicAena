// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const {dialogflow} = require('actions-on-google');
process.env.DEBUG = 'dialogflow:debug'; 

const app = dialogflow();

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

app.intent('aena', conv =>{
conv.ask('Hola');
});
