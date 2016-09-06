'use strict';

const steps = require('../../');

Feature('Track Application / Relationship');

Before((
  I,
  relationshipPage
) => {
  I.visitPage(relationshipPage, steps);
});

Scenario('On submitting the completed form I am taken to email step', (
  I,
  emailAddressPage,
  relationshipPage
) => {
  relationshipPage.fillFormAndSubmit();
  I.seeInCurrentUrl(emailAddressPage.url);
});
