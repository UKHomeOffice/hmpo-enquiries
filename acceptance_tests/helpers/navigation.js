'use strict';

module.exports = class Navigation extends Helper {
  refreshPage() {
    return new Promise((resolve, reject) => {
      this.helpers.WebDriverIO.browser.refresh()
        .then(resolve)
        .catch(reject);
    });
  }
};
