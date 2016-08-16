'use strict';

const TRANSLATIONS = require('../../../track-application/translations/en/default');
const ADDRESS = TRANSLATIONS.pages.address;

let I;

module.exports = {

  _init() {
    I = require('so-acceptance/steps')();
  },

  url: 'postcode',
  'address-url': 'address',
  'address-lookup-url': 'address-lookup',
  fields: {
    postcode: '#postcode-code',
    'address-lookup': '#address-lookup',
    'address-manual': '#address-manual'
  },
  links: {
    'manual-entry': '#manual-entry',
    'cant-find-address': '#cant-find'
  },
  header: {
    customer: ADDRESS.header.representative.false,
    representative: ADDRESS.header.default
  },
  content: {
    postcode: 'CR0 2EU',
    address: '49 Sydenham Road, Croydon, CR0 2EU'
  },

  fillFormAndSubmit(field) {
    I.fillField(field, this.content.postcode);
    I.submitForm();
  },

  selectAddressAndSubmit() {
    this.fillFormAndSubmit(this.fields.postcode);
    I.selectOption(this.fields['address-lookup'], this.content.address);
    I.submitForm();
  }
};
