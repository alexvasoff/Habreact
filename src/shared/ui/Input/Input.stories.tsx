import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemePovider';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

/* RAW VARIABLES */
export const Default = Template.bind({});
Default.args = {
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'initial value',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Введите имя',
};
