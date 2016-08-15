'use strict';

const JOURNEY_NAME = require('./content').name;

Feature('Track Application / Email address');

// eslint-disable-next-line max-params
Before((
  I,
  emailAddressPage,
  refNumberPage,
  applyOnlinePage,
  whoseApplicationPage,
  applicantsFullNamePage
) => {
  I.visitPage(emailAddressPage, JOURNEY_NAME, [
    applyOnlinePage,
    whoseApplicationPage,
    applicantsFullNamePage,
    refNumberPage
  ]);
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
  yield I.setSessionData(JOURNEY_NAME, {
    representative: 'false'
  });
  I.refreshPage();
  I.see(emailAddressPage.hint);
});

Scenario('I dont\'t see the hint if I am the customer', function *(
  I,
  emailAddressPage
) {
  yield I.setSessionData(JOURNEY_NAME, {
    representative: 'true'
  });
  I.refreshPage();
  I.dontSee(emailAddressPage.hint);
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

Scenario('I am taken to the address step if I am a customer', function *(
  I,
  emailAddressPage,
  addressPage
) {
  yield I.setSessionData(JOURNEY_NAME, {
    representative: 'false'
  });
  I.refreshPage();
  emailAddressPage.fillFormAndSubmit(emailAddressPage.content.valid);
  I.seeInCurrentUrl(addressPage.url);
});

Scenario('I am taken to the confirm step if I am a representative', function *(
  I,
  emailAddressPage,
  confirmPage
) {
  yield I.setSessionData(JOURNEY_NAME, {
    representative: 'true'
  });
  I.refreshPage();
  emailAddressPage.fillFormAndSubmit(emailAddressPage.content.valid);
  I.seeInCurrentUrl(confirmPage.url);
});
