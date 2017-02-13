'use strict';

var chai = require('chai');
var expect = chai.expect;
chai.config.includeStack = true;
var Kleinhirn = require('../lib/kleinhirn');

describe('Kleinhirn', function(){
  var hirn = new Kleinhirn();
  var memoryThingWithNumber = {thing : 'Bier trinken', number: '5'};

  it('rembers a things', function() {
    hirn.remember(memoryThingWithNumber);
    console.log(hirn)
    expect(hirn.data()).to.have.lengthOf(1);
  });
  it('forgets things', function() {
    hirn.forget();
    expect(hirn.data()).to.have.lengthOf(0);
  });
  it('can tell what it rembered', function() {
    hirn.remember(memoryThingWithNumber);
    expect(hirn.tell()).to.equal("5 Bier trinken\n");
  });
});
