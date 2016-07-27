'use strict';

Feature('The app opens');

Scenario('The page loads and has HMPO Passport Enquiries as header', (I) => {
  I.amOnPage('/');
  I.see('HMPO Passport Enquiries');
});
