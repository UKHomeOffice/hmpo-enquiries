'use strict';

const steps = {
  name: 'common',
  steps: require('../../')
};

Feature('Representatives Full Name');

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

Scenario('An error is shown if representatives-full-name is not completed', (
  I,
  repsFullNamePage
) => {
  I.submitForm();
  I.seeErrors(repsFullNamePage['representatives-full-name']);
});
