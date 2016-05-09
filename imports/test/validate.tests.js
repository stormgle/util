"use strict"

import util from '../api/validate.js';
import { assert } from 'meteor/practicalmeteor:chai';

console.info('INFO : Test Validate');

describe('VALIDATE', function () {
  
  describe('isURL', function () {
    
    describe('should validated as URL', function () {
      const urls = [
        // http
        'http://127.0.0.1',
        'http://127.0.0.1/',
        'http://127.0.0.1/blah_blah',
        'http://127.0.0.1/blah_blah/?p=q',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:3000/',
        'http://127.0.0.1:3000/blah_blah',
        'http://localhost',
        'http://localhost/',
        'http://localhost/blah_blah',
        'http://localhost/blah_blah/?p=q',
        'http://localhost:3000',
        'http://localhost:3000/',
        'http://localhost:3000/blah_blah',        
        'http://example.com',
        'http://www.example.com',
        'http://www.subdomain.example.com',
        'http://example.com/',
        'http://example.com/#bookmark',
        'http://example.com/blah_blah',
        'http://example.com/blah_blah/?p=q',
        'http://example.com:8080',
        'http://example.com:8080/',
        'http://example.com:8080/blah_blah'     ,
        'http://userid@example.com',
        'http://userid@example.com/',
        'http://userid@example.com/blah_blah',
        'http://userid@example.com:8080',
        'http://userid@example.com:8080/',
        'http://userid@example.com:8080/blah_blah',
        'http://userid:password@example.com',
        'http://userid:password@subdomain.example.com',
        'http://userid:password@example.com/',
        'http://userid:password@example.com/blah_blah',
        'http://userid:password@example.com:8080',
        'http://userid:password@example.com:8080/',
        'http://userid:password@example.com:8080/blah_blah',
        // https
        'https://example.com',
        'https://www.example.com',
        'https://www.subdomain.example.com',
      ];   
      urls.forEach( url => {
        it (`Check with ${url}`, function () {
          assert.equal( util.isURL(url), true );
        });  
      });
    });    
    
    describe('should NOT validated as URL', function () {
      const nurls = [
        'domain',
        'name@domain.com',
        'http://',
        'http://.',
        'http://?',
        'http://#',
        'foo.com',
        '//',
        '//abc'
      ];   
      nurls.forEach( url => {
        it (`Check with ${url}`, function () {
          assert.equal( util.isURL(url), false );
        });  
      });
    });   
    
  });
  
});
