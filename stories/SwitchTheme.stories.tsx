// components/ThemeSwitcher.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeSwitcher } from '../components/utils/ThemeSwitcher';


export default {
 title: 'Components/ThemeSwitcher',
 component: ThemeSwitcher,
} as Meta;

const Template: Story = (args) => <ThemeSwitcher {...args} />;

export const Default = Template.bind({});
