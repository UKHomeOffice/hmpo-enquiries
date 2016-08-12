'use strict';

const JOURNEY_NAME = require('./content').name;

Feature('Track Application / Ref Number');

Before((
  I,
  refNumberPage,
  applyOnlinePage,
  whoseApplicationPage,
  applicantsFullNamePage
) => {
  I.visitPage(refNumberPage, JOURNEY_NAME, [
    applyOnlinePage,
    whoseApplicationPage,
    applicantsFullNamePage
  ]);
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
  yield I.setSessionData(JOURNEY_NAME, {
    representative: 'false'
  });
  I.refreshPage();
  refNumberPage.fillFormAndSubmit();
  I.seeInCurrentUrl(emailAddressPage.url);
});

Scenario('I am taken to the address step if I am the representative', function *(
  I,
  refNumberPage,
  addressPage
) {
  yield I.setSessionData(JOURNEY_NAME, {
    representative: 'true'
  });
  I.refreshPage();
  refNumberPage.fillFormAndSubmit();
  I.seeInCurrentUrl(addressPage.url);
});
