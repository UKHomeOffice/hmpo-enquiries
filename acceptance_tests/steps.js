'use strict';

module.exports = () => {
  return actor({

    selectors: {
      submit: 'input[type="submit"]'
    },

    submitForm() {
      this.click(this.selectors.submit);
    },

    visitPage(page, journey, prereqs) {
      let start = '';
      if (journey) {
        start = `${journey}/`;
      }
      const url = `/${start}${page.url}`;

      this.amOnPage('/');

      if (prereqs) {
        if (!Array.isArray(prereqs)) {
          prereqs = [prereqs];
        }
        prereqs = prereqs.map(prereq => `/${prereq.url}`);
        this.setSessionSteps(journey, prereqs);
      }
      this.amOnPage(url);
      this.seeInCurrentUrl(url);
    },

    seeErrors(fields) {
      if (!Array.isArray(fields)) {
        fields = [fields];
      }

      fields.forEach(field => {
        if (!field.match(/.*-group$/)) {
          field = `${field}-group`;
        }
        this.seeElement(`${field}.validation-error`);
      });
    },

    seeHint(field) {
      this.seeElement(`${field}-hint`);
    },

    dontSeeHint(field) {
      this.dontSeeElement(`${field}-hint`);
    },

    seeElements(selectors) {
      if (!Array.isArray(selectors)) {
        selectors = [selectors];
      }

      selectors.forEach(selector => {
        this.seeElement(selector);
      });
    }

  });
};
