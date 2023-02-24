import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorators } from '@/shared/config/storybook/themeDecorators/themeDecorators';
import { Theme } from '@/app/providers/ThemePovider';
import { NotFound } from '@/pages/NotFound';

export default {
  title: 'pages/NotFound',
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorators(Theme.DARK)];
