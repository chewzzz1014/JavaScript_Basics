'use strict'

// in static import, the path of module must be specified and module can't be imported in non-top-level code (eg. inside if block)

// dynamic import

// dynamically specificy the path of module
let modulePath = prompt("Path?");
/*
import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error>)
*/

// or import like this
let {hi, bye} = await import("./say.js");
