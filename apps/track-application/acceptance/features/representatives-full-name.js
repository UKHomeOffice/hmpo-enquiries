'use strict';

const steps = require('../../');

Feature('Track Application / Representatives Full Name');

Before((
  I,
  repsFullNamePage
) => {
  I.visitPage(repsFullNamePage, steps);
});

Scenario('The correct form elements are present', (
  I,
  repsFullNamePage
) => {
  I.seeElements(repsFullNamePage['representatives-full-name']);
});

Scenario('An error is shown if applicants-full-name is not completed', (
  I,
  repsFullNamePage
) => {
  I.submitForm();
  I.seeErrors(repsFullNamePage['representatives-full-name']);
});

Scenario('On submitting the completed form I am taken to relationship step', (
  I,
  repsFullNamePage,
  relationshipPage
) => {
  repsFullNamePage.fillFormAndSubmit();
  I.seeInCurrentUrl(relationshipPage.url);
});
