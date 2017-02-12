'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hirn = require('../lib/kleinhirn');

describe('Kleinhirn', function(){
  var subject = new Kleinhirn();
  var memoryThingWithNumber = {thing : 'Bier trinken', number: '5'};

  describe('#verbalize', function(){
    it('returns a list of hotels', function() {
      var hotels = subject.getPassion(passion).then( function(obj){
        return obj.body.aggregations.hotels;
      });
