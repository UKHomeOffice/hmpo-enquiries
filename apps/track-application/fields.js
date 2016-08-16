'use strict';

module.exports = {
  'apply-online': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    options: [{
      value: 'yes',
      label: 'fields.apply-online.options.yes'
    }, {
      value: 'no',
      label: 'fields.apply-online.options.no'
    }]
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
  },
  'applicants-full-name': {
    mixin: 'input-text',
    validate: ['required']
  },
  'no-ref-number': {
    mixin: 'checkbox'
  },
  'ref-number': {
    mixin: 'input-text',
    validate: ['required'],
    dependent: {
      field: 'no-ref-number',
      value: ''
    }
  },
  'email-address': {
    mixin: 'input-text',
    validate: ['required', 'email']
  },
  'representatives-full-name': {
    mixin: 'input-text',
    validate: ['required']
  }
};
