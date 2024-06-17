import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemePovider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithData = Template.bind({});
WithData.args = {};
WithData.decorators = [StoreDecorator({ login: { email: 'admin', password: 'password' } })];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({ login: { email: 'admin', password: 'password', error: 'error' } })];

export const WithLoading = Template.bind({});
WithLoading.args = {};
WithLoading.decorators = [StoreDecorator({ login: { email: 'admin', password: 'password', isLoading: true } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
