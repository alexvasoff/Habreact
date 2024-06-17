import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemePovider';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  text: 'text',
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'title',
  text: 'text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'text',
};

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
  title: 'title',
  text: 'text',
  theme: 'error',
};
