'use strict';

const TRANSLATIONS = require('../../apps/track-application/translations/en/default');
const EMAIL_ADDRESS = TRANSLATIONS.fields['email-address'];

let I;

module.exports = {

  _init() {
    I = require('../steps.js')();
  },

  url: 'email-address',
  'email-address': '#email-address',
  hint: EMAIL_ADDRESS.hint.representative.false,
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
