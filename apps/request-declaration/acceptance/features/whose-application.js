'use strict';

const steps = require('../../');

Feature('Request a replacement declaration form / Whose Application');

Before((
  I,
  whoseApplicationPage
) => {
  I.visitPage(whoseApplicationPage, steps);
});

Scenario('When I select any option I am taken to the how-to-receive step', (
  I,
  whoseApplicationPage,
  howToReceivePage
) => {
  I.checkOption(whoseApplicationPage.false);
  I.submitForm();
  I.seeInCurrentUrl(howToReceivePage.url);
});
