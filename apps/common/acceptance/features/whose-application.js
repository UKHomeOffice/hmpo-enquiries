'use strict';

const steps = {
  name: 'common',
  steps: require('../../')
};

Feature('Whose Application step');

Before((
  I,
  whoseApplicationPage
) => {
  I.visitPage(whoseApplicationPage, steps);
});

Scenario('The correct form elements are present', (
  I,
  whoseApplicationPage
) => {
  I.seeElements([
    whoseApplicationPage.representative,
    whoseApplicationPage.true,
    whoseApplicationPage.false
  ]);
});

Scenario('An error is shown if whose-application is not completed', (
  I,
  whoseApplicationPage
) => {
  I.submitForm();
  I.seeErrors(whoseApplicationPage.representative);
});
