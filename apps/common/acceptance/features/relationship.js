'use strict';

const steps = {
  name: 'common',
  steps: require('../../')
};

Feature('Relationship');

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
