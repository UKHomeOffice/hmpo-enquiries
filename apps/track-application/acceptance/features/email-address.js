'use strict';

const steps = require('../../');

Feature('Track Application / Email address');

Before((
  I,
  emailAddressPage
) => {
  I.visitPage(emailAddressPage, steps);
});

Scenario('I am taken to the postcode step if I am a customer', function *(
  I,
  emailAddressPage,
  postcodePage
) {
  yield I.setSessionData(steps.name, {
    representative: 'false'
  });
  yield I.refreshPage();
  emailAddressPage.fillFormAndSubmit(emailAddressPage.content.valid);
  I.seeInCurrentUrl(postcodePage.url);
});

Scenario('I am taken to the confirm step if I am a representative', function *(
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
