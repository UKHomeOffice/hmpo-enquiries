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
  'representative': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    options: [{
      value: 'false',
      label: 'fields.representative.options.false'
    }, {
      value: 'true',
      label: 'fields.representative.options.true'
    }]
  }
};
