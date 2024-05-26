import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemePovider';
import { AppLink, AppLinkTheme } from './AppLink';

// export default {
//   title: 'shared/AppLink',
//   component: AppLink,
//   args: {
//     to: '/',
//   },
// } as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Link text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Link text',
  theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Link text',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Link text',
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
