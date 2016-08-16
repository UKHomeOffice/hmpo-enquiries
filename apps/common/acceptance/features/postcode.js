'use strict';

const steps = {
  name: 'common',
  steps: require('../../')
};

Feature('Postcode');

Before((
  I,
  postcodePage
) => {
  I.visitPage(postcodePage, steps);
});

Scenario('The correct form elements are present on postcode step', (
  I,
  postcodePage
) => {
  I.seeElements([
    postcodePage.fields.postcode
  ]);
});

Scenario('I see the customer header if I am the customer', function *(
  I,
  postcodePage
) {
  yield I.setSessionData(steps.name, {
    representative: 'false'
  });
  I.refreshPage();
  I.see(postcodePage.header.customer);
});

Scenario('I see the representative header if I am the representative', function *(
  I,
  postcodePage
) {
  yield I.setSessionData(steps.name, {
    representative: 'true'
  });
  I.refreshPage();
  I.see(postcodePage.header.representative);
});

Scenario('An error is shown if postcode is not completed', (
  I,
  postcodePage
) => {
  I.submitForm();
  I.seeErrors(postcodePage.fields.postcode);
});

Scenario('I am taken to the manual-address step when I click the link', (
  I,
  postcodePage
) => {
  I.click(postcodePage.links['manual-entry']);
  I.seeInCurrentUrl(postcodePage['address-url']);
});

Scenario('The correct form elements are present for manual address', (
  I,
  postcodePage
) => {
  I.click(postcodePage.links['manual-entry']);
  I.seeElements([
    postcodePage.fields['address-manual']
  ]);
});

Scenario('An error is shown if manual address is not completed', (
  I,
  postcodePage
) => {
  I.click(postcodePage.links['manual-entry']);
  I.submitForm();
  I.seeErrors(postcodePage.fields['address-manual']);
});

Scenario('I am taken to the address-lookup step from postcode', (
  I,
  postcodePage
) => {
  postcodePage.fillFormAndSubmit(postcodePage.fields.postcode);
  I.seeInCurrentUrl(postcodePage['address-lookup-url']);
});

Scenario('An error is shown if address-lookup is not completed', (
  I,
  postcodePage
) => {
  postcodePage.fillFormAndSubmit(postcodePage.fields.postcode);
  I.submitForm();
  I.seeErrors(postcodePage.fields['address-lookup']);
});

Scenario('I am taken to the manual address step if I cant find my address', (
  I,
  postcodePage
) => {
  postcodePage.fillFormAndSubmit(postcodePage.fields.postcode);
  I.click(postcodePage.links['cant-find-address']);
  I.seeInCurrentUrl(postcodePage['address-url']);
});

Scenario('When I click cant find my address link, I will see the postcode I entered in the manual address step', (
  I,
  postcodePage
) => {
  postcodePage.fillFormAndSubmit(postcodePage.fields.postcode);
  I.click(postcodePage.links['cant-find-address']);
  I.see(postcodePage.content.postcode);
});
