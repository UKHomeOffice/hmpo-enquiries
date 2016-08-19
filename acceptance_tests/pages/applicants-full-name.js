'use strict';

const TRANSLATIONS = require('../../apps/track-application/translations/en/default');
const APPLICANTS_FULL_NAME = TRANSLATIONS.fields['applicants-full-name'];

let I;

module.exports = {

  _init() {
    I = require('so-acceptance/steps')();
  },

  url: 'applicants-full-name',
  'applicants-full-name': '#applicants-full-name',
  label: {
    representative: APPLICANTS_FULL_NAME.label.default,
    customer: APPLICANTS_FULL_NAME.label.representative.false
  },
  content: 'Sterling Archer',

  fillFormAndSubmit() {
    I.seeElement(this['applicants-full-name']);
    I.fillField(this['applicants-full-name'], this.content);
    I.submitForm();
  }
};
