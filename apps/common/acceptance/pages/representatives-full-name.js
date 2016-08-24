'use strict';

let I;

module.exports = {

  _init() {
    I = require('so-acceptance/steps')();
  },

  url: 'representatives-full-name',
  'representatives-full-name': '#representatives-full-name',
  content: 'Barry Dylan',

  fillFormAndSubmit() {
    I.seeElement(this['representatives-full-name']);
    I.fillField(this['representatives-full-name'], this.content);
    I.submitForm();
  }
};
