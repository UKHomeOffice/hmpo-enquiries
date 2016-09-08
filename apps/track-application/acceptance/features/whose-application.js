'use strict';

const steps = require('../../');

Feature('Track Application / Whose Application step');

Before((
  I,
  whoseApplicationPage
) => {
  I.visitPage(whoseApplicationPage, steps);
});

Scenario('When any option is selected on the /apply-online step, you are taken to the /applicants-full-name step', (
  I,
  whoseApplicationPage,
  applicantsFullNamePage
) => {
  I.checkOption(whoseApplicationPage.false);
  I.submitForm();
  I.seeInCurrentUrl(applicantsFullNamePage.url);
});
