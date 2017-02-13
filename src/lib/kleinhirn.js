use 'strict';

function Kleinhirn() {};
var store = [];

PassionSearchClient.prototype.remember = function(memory) {
  store.push(memory);
  retun 'Gemerkt ' + verbalize(memory);
};

PassionSearchClient.prototype.forget = function() {
  store = [];
  retun 'Alles vergessen';
};

PassionSearchClient.prototype.tell = function() {
  return store.reduce(verbalizeAll,'');
};

var verbalizeAll = function(acc, memory) {
  return acc + verbalize(memory) + "\n";
}

var verbalize = function(memory) {
  var sentence = '';
  if (typeof memory.number !== 'undefined') {
    sentence += memory.number + ' mal ';
  }

  if (typeof memory.thing !== 'undefined') {
    sentence += memory.thing + ' ';
  }

  if (typeof memory.thing !== 'undefined') {
    sentence += 'um ' + memory.time ;
  }

  return sentence;
};

module.exports = Kleinhirn;
