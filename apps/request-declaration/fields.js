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
  }
};
