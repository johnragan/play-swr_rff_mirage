module.exports = {
  stories: ["../src/components/**/*.stories.js"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
};

// npx -p @storybook/cli sb init
// yarn add @storybook/addon-a11y --dev
// yarn storybook
// yarn build-storybook
// npx chromatic --project-token=hckudrcm9
