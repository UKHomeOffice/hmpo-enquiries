'use strict';

module.exports = {
  'apply-online-radio': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    options: [{
      value: 'yes',
      label: 'Yes'
    }, {
      value: 'no',
      label: 'No'
    }]
  },
  'representative': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    options: [{
      value: 'false',
      label: 'My passport application'
    }, {
      value: 'true',
      label: 'Someone else\'s passport application'
    }]
  },
  'applicants-full-name': {
    mixin: 'input-text',
    validate: ['required']
  }
};
