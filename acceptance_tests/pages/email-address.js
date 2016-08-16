'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps.js')();
  },

  url: 'email-address',
  'email-address': '#email-address',
  content: {
    invalid: 'invalid email',
    valid: 'email@email.com'
  },

  fillFormAndSubmit(content) {
    I.seeElement(this['email-address']);
    I.fillField(this['email-address'], content);
    I.submitForm();
  }
};
