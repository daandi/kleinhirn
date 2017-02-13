'use strict';
var Alexa = require('alexa-sdk');
var Kleinhirn= require('./lib/kleinhirn');

var APP_ID = "Kleinhirn";
var hirn = new Kleinhirn();

var languageStrings = {
    "de-DE": {
        "translation": {
            "SKILL_NAME" : "Kleinhirn",
            "HELP_MESSAGE" : "Ich merke mir kleine Sachen für dich\n" + "Sage Merke dir 42 oder Merke dir 5 Schritte nach osten ",
            "HELP_REPROMPT" : "Wie kann ich dir helfen?",
            "STOP_MESSAGE" : "Hirn wird geleert. Servus."
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('AMAZON.HelpIntent');
    },
    'MemoryIntent': function (memoryIntent) {
      var memory = {
        thing : memoryIntent.thing.value,
        number : memoryIntent.number.value,
        time : memoryIntent.time.value
      };
      this.emit(':tell', hirn.remember(memory));
    },
    'ForgetIntent': function () {
      this.emit(':tell', hirn.forget());

    },
    'TellIntent': function () {
      var answer = hirn.tell();
      this.emit(':tellWithCard', answer, this.t("SKILL_NAME"), answer);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};
