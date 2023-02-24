import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonVariables } from './Button';
import { themeDecorators } from '@/shared/config/storybook/themeDecorators/themeDecorators';
import { Theme } from '@/app/providers/ThemePovider';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: 'Test',
  variable: ButtonVariables.CLEAR,
};

export const Default = Template.bind({});
Default.args = {
  children: 'Test',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Test',
  variable: ButtonVariables.OUTLINE,
};

Outline.decorators = [themeDecorators(Theme.DARK)];
