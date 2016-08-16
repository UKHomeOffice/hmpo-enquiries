'use strict';

const steps = require('../../');

Feature('Track Application / Postcode');

Before((
  I,
  postcodePage
) => {
  I.visitPage(postcodePage, steps);
});

Scenario('I am taken to the confirm step from the manual address', (
  I,
  postcodePage,
  confirmPage
) => {
  I.click(postcodePage.links['manual-entry']);
  postcodePage.fillFormAndSubmit(postcodePage.fields['address-manual']);
  I.seeInCurrentUrl(confirmPage.url);
});

Scenario('When an address is selected I am taken to the confirm step', (
  I,
  postcodePage,
  confirmPage
) => {
  postcodePage.selectAddressAndSubmit();
  I.seeInCurrentUrl(confirmPage.url);
});
