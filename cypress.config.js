const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports", // pasta onde o relatório será salvo
    overwrite: false,             // não sobrescreve relatórios anteriores
    html: true,                   // gera relatório em HTML
    json: true                    // gera relatório em JSON
  },
  e2e: {
    baseUrl: "https://bugbank.netlify.app/",
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar eventos como screenshots ou plugins
      return config;
    },
  },
});
