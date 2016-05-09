"use strict"

import typecheck from './imports/api/typecheck.js';
import validate from './imports/api/validate.js';

export default assembly ([
  extend,
  typecheck,
  validate
]);

function assembly (parts) {
  const util = {};
  parts.forEach( part => extend(util, part) );
  return util;
}

function extend (origin, obj) {
  if ( typecheck.isFunction(obj) ) {
    origin[obj.name] = obj;
  } else if ( typecheck.isObject(obj) ) {
    for (let attr in obj) {
      origin[attr] = obj[attr];
    }  
  }   
}
