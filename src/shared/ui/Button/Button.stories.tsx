import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonSize, ButtonVariables } from './Button';
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

export const Background = Template.bind({});
Background.args = {
  children: 'Test',
  variable: ButtonVariables.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Test',
  variable: ButtonVariables.BACKGROUND_INVERT,
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  variable: ButtonVariables.BACKGROUND_INVERT,
  square: true,
  size: ButtonSize.M,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  variable: ButtonVariables.BACKGROUND_INVERT,
  square: true,
  size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  variable: ButtonVariables.BACKGROUND_INVERT,
  square: true,
  size: ButtonSize.XL,
};
