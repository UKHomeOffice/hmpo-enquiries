'use strict';

const steps = require('../../');

Feature('Enquire about a passport application in progress / Whose Application step');

Before((
  I,
  whoseApplicationPage
) => {
  I.visitPage(whoseApplicationPage, steps);
});

Scenario('When My Application is selected I am taken to the reference number step', (
  I,
  whoseApplicationPage,
  refNumberPage
) => {
  I.checkOption(whoseApplicationPage.false);
  I.submitForm();
  I.seeInCurrentUrl(refNumberPage.url);
});

Scenario('When Someone else\'s Application is selected I am taken to the applicants-dob step', (
  I,
  whoseApplicationPage,
  applicantsDOBPage
) => {
  I.checkOption(whoseApplicationPage.true);
  I.submitForm();
  I.seeInCurrentUrl(applicantsDOBPage.url);
});
