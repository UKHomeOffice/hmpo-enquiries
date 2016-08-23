'use strict';

const steps = require('../');

Feature('Track Application / Relationship');

Before((
  I,
  relationshipPage
) => {
  I.visitPage(relationshipPage, steps);
});

Scenario('The correct form elements are present', (
  I,
  relationshipPage
) => {
  I.seeElements([
    relationshipPage.relationship
  ]);
});

Scenario('An error is shown if ref-number is not completed', (
  I,
  relationshipPage
) => {
  I.submitForm();
  I.seeErrors(relationshipPage.relationship);
});

Scenario('On submitting the completed form I am taken to email step', (
  I,
  emailAddressPage,
  relationshipPage
) => {
  relationshipPage.fillFormAndSubmit();
  I.seeInCurrentUrl(emailAddressPage.url);
});
