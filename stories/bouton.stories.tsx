// components/ButtonTest.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';

import ButtonTest from '../components/ui/ButtonStoryTest'; // Pensez à modifier le chemin de fichier si nécessaire

export default {
 title: 'Components/ButtonTest',
 component: ButtonTest,
} as Meta;

const Template: Story = (args) => <ButtonTest {...args} />;

export const Default = Template.bind({});
