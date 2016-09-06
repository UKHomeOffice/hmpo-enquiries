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
  'email-address': {
    mixin: 'input-text',
    validate: ['required', 'email']
  },
  'relationship': {
    mixin: 'input-text',
    validate: ['required']
  }
};
