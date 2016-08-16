'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps.js')();
  },

  url: 'relationship',
  relationship: '#relationship',
  content: 'My mate',

  fillFormAndSubmit() {
    I.seeElement(this.relationship);
    I.fillField(this.relationship, this.content);
    I.submitForm();
  }
};
