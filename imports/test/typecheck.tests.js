"use strict"

import util from '../api/typecheck.js';
import { assert } from 'meteor/practicalmeteor:chai';

console.info('INFO : Test Type-Check');

describe('TYPE CHECK', function () {
  
  const obj = {
    Arguments : arguments,
    Array : [],
    Function : function () {},
    String : 'it is a string',
    Number : 123,
    Date : new Date(),
    RegExp : new RegExp("ab+c"),
    Object : {}
  };

  const apis = ['Arguments', 'Array', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Object'];
    
  apis.forEach( api => {
    describe(`is${api}`, function () {    
      
     apis.forEach( name => {
        it (`Check ${api.toUpperCase()} as ${name.toUpperCase()}`, function() {
          assert.equal( util[`is${name}`](obj[api]), (api === name) );
        })
      });    
    });  
  });
  
});
