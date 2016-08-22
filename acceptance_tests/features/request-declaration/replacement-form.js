'use strict';

const JOURNEY_NAME = require('./content').name;

Feature('Apply online step');

Before((
  I,
  replacementFormPage
) => {
  I.visitPage(replacementFormPage, JOURNEY_NAME);
});

Scenario('On submitting the form I am taken to the whose-application step', (
  I,
  whoseApplicationPage
) => {
  I.submitForm();
  I.seeInCurrentUrl(whoseApplicationPage.url);
});
