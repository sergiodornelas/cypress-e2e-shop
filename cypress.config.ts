import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
baseUrl: "http://lojaebac.ebaconline.art.br/",
  },
reporter: "mochawesome",
  reporterOptions: {
    "reportDir": "cypress/results",
    "overwrite": true,
    "html": true,
    "json": false
  }
});
