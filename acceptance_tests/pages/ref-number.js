'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps.js')();
  },

  url: 'ref-number',
  'ref-number': '#ref-number',
  'no-ref-number': '#no-ref-number',
  content: '123456789',

  fillFormAndSubmit() {
    I.seeElement(this['ref-number']);
    I.fillField(this['ref-number'], this.content);
    I.submitForm();
  }
};
