'use strict';

module.exports = {
  'applicants-full-name': {
    mixin: 'input-text',
    validate: ['required']
  },
  'representatives-full-name': {
    mixin: 'input-text',
    validate: ['required']
  },
  'dob': {},
  'dob-day': {
    validate: ['required', 'numeric']
  },
  'dob-month': {
    validate: ['required', 'numeric']
  },
  'dob-year': {
    validate: ['required', 'numeric']
  }
};
