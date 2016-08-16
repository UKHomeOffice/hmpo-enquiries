'use strict';

const BaseController = require('hof').controllers.base;

module.exports = class AddressController extends BaseController {
  getValues(req, res, callback) {
    if (req.params.action === 'manual') {
      req.sessionModel.unset([
        'postcode-code',
        'postcodeApiMeta'
      ]);
    }
    super.getValues(req, res, callback);
  }

  locals(req, res, callback) {
    const isManual = req.params.action === 'manual';
    const locals = super.locals(req, res, callback);
    return Object.assign({}, locals, {
      postcodeApiMessageKey: isManual ? '' : (req.sessionModel.get('postcodeApiMeta') || {}).messageKey
    });
  }
};
