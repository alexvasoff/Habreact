import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorators } from '@/shared/config/storybook/themeDecorators/themeDecorators';
import { Theme } from '@/app/providers/ThemePovider';
import { PageError } from './PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorators(Theme.DARK)];
