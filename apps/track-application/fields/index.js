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
  'whose-app-radio': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    options: [{
      value: 'my application',
      label: 'My passport application'
    }, {
      value: 'someone else\'s',
      label: 'Someone else\'s passport application'
    }]
  }
};
