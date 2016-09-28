'use strict';

const steps = require('../../');

Feature('Request a replacement declaration form / Representatives Full Name');

Before((
  I,
  repsFullNamePage
) => {
  I.visitPage(repsFullNamePage, steps);
});

Scenario('On submitting the completed form I am taken to relationship step', (
  I,
  repsFullNamePage,
  relationshipPage
) => {
  repsFullNamePage.fillFormAndSubmit();
  I.seeInCurrentUrl(relationshipPage.url);
});
