'use strict';

const path = require('path');

const relative = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
  name: 'hmpo-enquiries',
  include: {
    applyOnlinePage: relative('./pages/apply-online.js'),
    trackOnlinePage: relative('./pages/track-online.js'),
    whoseApplicationPage: relative('./pages/whose-application.js'),
    applicantsFullNamePage: relative('./pages/applicants-full-name.js'),
    refNumberPage: relative('./pages/ref-number.js'),
    emailAddressPage: relative('./pages/email-address.js'),
    addressPage: relative('./pages/address.js'),
    applicantsDobPage: relative('./pages/applicants-dob.js'),
    repsFullNamePage: relative('./pages/representatives-full-name.js'),
    relationshipPage: relative('./pages/relationship.js'),
    enquiryTypePage: relative('./pages/enquiry-type.js'),
    confirmPage: relative('./pages/confirm.js')
  }
};