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
  'postcode-code': {
    mixin: 'input-text-code',
    validate: ['required', 'postcode'],
    formatter: 'uppercase'
  },
  'address-manual': {
    mixin: 'textarea',
    validate: ['required'],
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens']
  },
  'address-lookup': {
    className: ['address'],
  }
};
