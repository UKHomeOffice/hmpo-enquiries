'use strict';

const steps = require('../../');

Feature('Request a replacement declaration form / Email address');

Before((
  I,
  emailAddressPage
) => {
  I.visitPage(emailAddressPage, steps);
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
