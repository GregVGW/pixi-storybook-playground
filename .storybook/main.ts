import type { StorybookConfig } from "@pixi/storybook-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@pixi/storybook-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
