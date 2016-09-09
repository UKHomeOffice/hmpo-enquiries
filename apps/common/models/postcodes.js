'use strict';

const Model = require('hof').Model;
const config = require('../../../config');
const url = require('url');

module.exports = class PostcodesModel extends Model {
  fetch(postcode) {
    return new Promise((resolve, reject) => {
      const options = Object.assign({}, {
        url: config.postcode.hostname + config.postcode.addresses.path,
        query: {
          postcode: postcode
        }
      });
      const reqConf = url.parse(this.url(options));

      reqConf.method = 'GET';
      reqConf.headers = {
        Authorization: config.postcode.authorization || ''
      };
      this.request(reqConf, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
};
