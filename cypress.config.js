const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Timeout sürelerini artırın
  defaultCommandTimeout: 10000,

  pageLoadTimeout: 60000,

  // Video kaydını devre dışı bırakın
  video: false,

  // Güvenlik sorunlarını devre dışı bırakın
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      config.chromeWebSecurity = false; // SSL hata kontrolünü devre dışı bırakma
      return config;
    },

    baseUrl:"https://example.cypress.io/"
    
  },
};
