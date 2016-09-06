'use strict';

const steps = require('../../');

Feature('Request a replacement declaration form / Applicants Full Name');

Before((
  I,
  applicantsFullNamePage
) => {
  I.visitPage(applicantsFullNamePage, steps);
});

Scenario('On submitting the completed form I am taken to ref-number step', (
  I,
  applicantsFullNamePage,
  refNumberPage
) => {
  applicantsFullNamePage.fillFormAndSubmit();
  I.seeInCurrentUrl(refNumberPage.url);
});
