'use strict';

let I;

module.exports = {

  _init() {
    I = require('so-acceptance/steps')();
  },

  url: 'applicants-dob',
  dob: '#dob',
  'dob-day': '#dob-day',
  'dob-month': '#dob-month',
  'dob-year': '#dob-year',
  content: {
    day: '1',
    month: '6',
    year: '1966'
  },

  fillFormAndSubmit() {
    I.fillField(this['dob-day'], this.content.day);
    I.fillField(this['dob-month'], this.content.month);
    I.fillField(this['dob-year'], this.content.year);
    I.submitForm();
  }
};
