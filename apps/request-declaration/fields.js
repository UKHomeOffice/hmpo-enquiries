'use strict';

module.exports = {
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
  },
  'ref-number': {
    mixin: 'input-text',
    validate: ['required']
  }
};
