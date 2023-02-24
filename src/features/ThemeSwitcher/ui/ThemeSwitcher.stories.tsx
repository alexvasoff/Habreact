import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorators } from '@/shared/config/storybook/themeDecorators/themeDecorators';
import { Theme } from '@/app/providers/ThemePovider';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorators(Theme.DARK)];
