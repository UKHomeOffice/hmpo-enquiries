'use strict';

const steps = require('../../');

Feature('Request a replacement declaration form / Ref Number');

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
    refNumberPage['ref-number']
  ]);
});

Scenario('An error is shown if ref-number is not completed', (
  I,
  refNumberPage
) => {
  I.submitForm();
  I.seeErrors(refNumberPage['ref-number']);
});

Scenario('I am taken to the email-address step if I am the customer and I have selected email on how-to-receive', function *(
  I,
  refNumberPage,
  emailAddressPage
){
  yield I.setSessionData(steps.name, {
    representative: 'false',
    'post-replacement': 'false'
  });
  yield I.refreshPage();
  refNumberPage.fillFormAndSubmit()
  I.seeInCurrentUrl(emailAddressPage.url);
});

Scenario('I am taken to the address step if I am the customer and I have selected post on how-to-receive', function *(
  I,
  refNumberPage,
  addressPage
){
  yield I.setSessionData(steps.name, {
    representative: 'false',
    'post-replacement': 'true'
  });
  yield I.refreshPage();
  refNumberPage.fillFormAndSubmit()
  I.seeInCurrentUrl(addressPage.url);
});

Scenario('I am taken to the applicants-dob step if I am the representative', function *(
  I,
  refNumberPage,
  applicantsDOBPage
){
  yield I.setSessionData(steps.name, {
    representative: 'true'
  });
  yield I.refreshPage();
  refNumberPage.fillFormAndSubmit()
  I.seeInCurrentUrl(applicantsDOBPage.url);
});
