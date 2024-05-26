import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemePovider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Test modal text',
  isOpen: true,
};

export const ModalDark = Template.bind({});
ModalDark.args = {
  children: 'Test modal text',
  isOpen: true,
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
