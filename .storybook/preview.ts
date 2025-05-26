import type { Preview } from '@storybook/web-components'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;

export const base = process.env.NODE_ENV === 'production' ? '/rxhui-components/' : '/'; 