'use strict';

const steps = require('../../');

Feature('Request a replacement declaration form / Relationship');

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
  yield I.setSessionData(steps.name, {
    representative: 'true',
    'post-replacement': 'false'
  });
  yield I.refreshPage();
  relationshipPage.fillFormAndSubmit();
  I.seeInCurrentUrl(emailAddressPage.url);
});

Scenario('On submitting the completed form I am taken to address step', (
  I,
  addressPage,
  relationshipPage
) => {
  yield I.setSessionData(steps.name, {
    representative: 'true',
    'post-replacement': 'true'
  });
  yield I.refreshPage();
  relationshipPage.fillFormAndSubmit();
  I.seeInCurrentUrl(addressPage.url);
});
