'use strict'

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const open = require("open");

const util = require('../util')
const manifestor = require('../manifestor');

module.exports = function download() {
  var fileId; // capture
  return manifestor.get()
    .then(function(config) {
      fileId = config.fileId
    }).then(function() {
      const url
          = 'https://script.google.com/d/'
          + fileId
          + '/edit?usp=drive_web'
      console.log('Opening ' + url)
      return open(url)
    }).catch(function(err) {
      console.log('Error running open command'.red);
      throw err;
    });
}
