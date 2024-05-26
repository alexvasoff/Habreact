import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonSize, ButtonVariables } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemePovider';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

/* RAW VARIABLES */
export const Clear = Template.bind({});
Clear.args = {
  children: 'Test',
  variable: ButtonVariables.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Test',
  variable: ButtonVariables.CLEAR_INVERTED,
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

Outline.decorators = [ThemeDecorator(Theme.DARK)];

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

/* SIZES */
export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Test',
  variable: ButtonVariables.OUTLINE,
  size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Test',
  variable: ButtonVariables.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Test',
  variable: ButtonVariables.OUTLINE,
  size: ButtonSize.XL,
};

/* SQUARE BUTTONS  */
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
