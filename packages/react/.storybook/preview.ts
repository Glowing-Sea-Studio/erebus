import type { Preview } from '@storybook/react';
import '../../core/src/components/index.css';
import '../../tokens/dist/css/variables.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
