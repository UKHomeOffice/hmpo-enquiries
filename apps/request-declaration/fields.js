'use strict';

module.exports = {
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
  'post-replacement': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    options: [{
      value: 'false',
      label: 'fields.post-replacement.options.false'
    }, {
      value: 'true',
      label: 'fields.post-replacement.options.true'
    }]
  }
};
