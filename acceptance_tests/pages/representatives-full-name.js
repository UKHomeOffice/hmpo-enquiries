'use strict';

const TRANSLATIONS = require('../../apps/track-application/translations/en/default');
const REPRESENTATIVES_FULL_NAME = TRANSLATIONS.fields['representatives-full-name'];

let I;

module.exports = {

  _init() {
    I = require('../steps')();
  },

  url: 'representatives-full-name',
  'representatives-full-name': '#representatives-full-name',
  label: REPRESENTATIVES_FULL_NAME.label,
  content: 'Barry Dylan',

  fillFormAndSubmit() {
    I.seeElement(this['representatives-full-name']);
    I.fillField(this['representatives-full-name'], this.content);
    I.submitForm();
  }
};
