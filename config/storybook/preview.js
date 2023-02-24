import { addDecorator } from '@storybook/react';
import { styleDecorators } from '../../src/shared/config/storybook/styleDecorators/styleDecorators';
import { themeDecorators } from '../../src/shared/config/storybook/themeDecorators/themeDecorators';
import { Theme } from '../../src/app/providers/ThemePovider';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(styleDecorators);
addDecorator(themeDecorators(Theme.LIGHT));
addDecorator(routerDecorator);
