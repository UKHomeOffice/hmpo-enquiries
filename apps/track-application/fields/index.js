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
  }
};
