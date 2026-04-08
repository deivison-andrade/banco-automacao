const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://blogdoagi.com.br",

    setupNodeEvents(on, config) {
      // pode adicionar plugins aqui futuramente
    },
  },

  // 🎥 Grava vídeo da execução
  video: true,

  // 📸 Tira print automaticamente quando falha
  screenshotOnRunFailure: true,

  // 📁 Pasta dos screenshots
  screenshotsFolder: "cypress/screenshots",

  // 📁 Pasta dos vídeos
  videosFolder: "cypress/videos",

  // ⏱ Timeout padrão (opcional, ajuda evitar flakiness)
  defaultCommandTimeout: 10000,

  // 🧪 Mantém logs mais limpos
  watchForFileChanges: false,
});