// TODO: make it easier to sync setup with src/main.ts

import { setup, Preview } from "@storybook/vue3";
import { createI18n } from "vue-i18n";
// TODO: load vite config so that storybook knows alias?
import { config as i18nConfig } from "@/i18n";
import { createPinia } from "pinia";
import "@/index.css";

setup((app) => {
  const i18n = createI18n(i18nConfig);
  app.use(i18n).use(createPinia());
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
