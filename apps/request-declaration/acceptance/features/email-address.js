'use strict';

const steps = require('../../');

Feature('Request a replacement declaration form / Email address');

Before((
  I,
  emailAddressPage
) => {
  I.visitPage(emailAddressPage, steps);
});

Scenario('The correct form elements are present', (
  I,
  emailAddressPage
) => {
  I.seeElements([
    emailAddressPage['email-address']
  ]);
});

Scenario('I see the hint if I am the customer', function *(
  I,
  emailAddressPage
) {
  yield I.setSessionData(steps.name, {
    representative: 'false'
  });
  yield I.refreshPage();
  I.seeHint(emailAddressPage['email-address']);
});

Scenario('I dont\'t see the hint if I am the customer', function *(
  I,
  emailAddressPage
) {
  yield I.setSessionData(steps.name, {
    representative: 'true'
  });
  yield I.refreshPage();
  I.dontSeeHint(emailAddressPage['email-address']);
});

Scenario('An error is shown if email-address is not completed', (
  I,
  emailAddressPage
) => {
  I.submitForm();
  I.seeErrors(emailAddressPage['email-address']);
});

Scenario('An error is shown if an invalid email-address in entered', (
  I,
  emailAddressPage
) => {
  emailAddressPage.fillFormAndSubmit(emailAddressPage.content.invalid);
  I.seeErrors(emailAddressPage['email-address']);
});

Scenario('I am taken to the confirm step', function *(
  I,
  emailAddressPage,
  confirmPage
) {
  yield I.setSessionData(steps.name, {
    representative: 'true'
  });
  yield I.refreshPage();
  emailAddressPage.fillFormAndSubmit(emailAddressPage.content.valid);
  I.seeInCurrentUrl(confirmPage.url);
});
