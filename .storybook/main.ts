import type { StorybookConfig } from "@storybook/web-components-vite";
import { html } from "lit";
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: '/rxhui-components/',
      build: {
        outDir: 'docs',
        rollupOptions: {
          input: {
            index: './.storybook/preview.ts'
          }
        }
      }
    });
  },
  managerHead: (head) => `
    ${head}
    <base href="/rxhui-components/">
  `,
  previewHead: (head) => `
    ${head}
    <base href="/rxhui-components/">
  `
};

export default config;