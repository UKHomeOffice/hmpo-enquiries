'use strict';

const steps = require('../../');

Feature('Track Application / Ref Number');

Before((
  I,
  refNumberPage
) => {
  I.visitPage(refNumberPage, steps);
});

Scenario('The correct form elements are present', (
  I,
  refNumberPage
) => {
  I.seeElements([
    refNumberPage['ref-number'],
    refNumberPage['no-ref-number']
  ]);
});

Scenario('An error is shown if ref-number is not completed', (
  I,
  refNumberPage
) => {
  I.submitForm();
  I.seeErrors(refNumberPage['ref-number']);
});

Scenario('An error is not shown if ref-number is not completed and no-ref-number is ticked', (
  I,
  refNumberPage,
  emailAddressPage
) => {
  I.click(refNumberPage['no-ref-number']);
  I.submitForm();
  I.seeInCurrentUrl(emailAddressPage.url);
});

Scenario('I am taken to the email-address step if I am the customer', function *(
  I,
  refNumberPage,
  emailAddressPage
) {
  yield I.setSessionData(steps.name, {
    representative: 'false'
  });
  yield I.refreshPage();
  refNumberPage.fillFormAndSubmit();
  I.seeInCurrentUrl(emailAddressPage.url);
});

Scenario('I am taken to the address step if I am the representative', function *(
  I,
  refNumberPage,
  addressPage
) {
  yield I.setSessionData(steps.name, {
    representative: 'true'
  });
  yield I.refreshPage();
  refNumberPage.fillFormAndSubmit();
  I.seeInCurrentUrl(addressPage.url);
});
