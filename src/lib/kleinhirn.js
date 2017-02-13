'use strict';

var store = [];
function Kleinhirn() {};

Kleinhirn.prototype.remember = function(memory) {
  store.push(memory);
  return 'Gemerkt ' + verbalize(memory);
};

Kleinhirn.prototype.forget = function() {
  store = [];
  return 'Alles vergessen';
};

Kleinhirn.prototype.tell = function() {
  return store.reduce(verbalizeAll,'');
};

Kleinhirn.prototype.data = function() {
  return store;
};

var verbalizeAll = function(acc, memory) {
  return acc + verbalize(memory) + "\n";
}

var verbalize = function(memory) {
  var number = typeof memory.number !== 'undefined';
  var thing = typeof memory.thing !== 'undefined';
  var time = typeof memory.time !== 'undefined';
  var sentence = '';
  if (number) {
    sentence += memory.number;
  }

  if (thing) {
    if (sentence.length > 0) {sentence += ' ';}
    sentence += memory.thing;
  }

  if (time) {
    if (sentence.length > 0) {sentence += ' um ';}
    sentence += memory.time ;
  }

  return sentence;
};

module.exports = Kleinhirn;
