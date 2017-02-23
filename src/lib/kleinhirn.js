'use strict';

class Kleinhirn {

  constructor() {
    this.store = [];
  };

  remember(memory) {
    this.store.push(memory);
    return 'Gemerkt ' + this.verbalize(memory);
  };

  forget() {
    this.store = [];
    return 'Alles vergessen';
  };

  tell() {
    return this.store.reduce((acc,memory) => acc + this.verbalize(memory) + '\n','');
  };

  data() {
    return this.store;
  };

  verbalize(memory) {
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

};

module.exports = Kleinhirn;
