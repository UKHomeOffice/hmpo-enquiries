'use strict';

let I;

module.exports = {

  _init() {
    I = require('so-acceptance/steps.js')();
  },

  url: 'enquiry-type',
  'enquiry-type': '#enquiry-type-group',

  track: '#enquiry-type-track',
  replace: '#enquiry-type-replace',
  progress: '#enquiry-type-progress',
  enquiry: '#enquiry-type-enquiry',
  feedback: '#enquiry-type-feedback',
  contact: '#enquiry-type-contact',

  checkOptionAndSubmit(option) {
    I.click(this[option]);
    I.submitForm();
  }
};
