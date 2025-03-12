import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";  // Correct Import

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/experimental-addon-test",
    "@storybook/nextjs"  // Correct Next.js Preset
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  }
};

export default config;
