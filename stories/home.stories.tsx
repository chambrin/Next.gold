// components/Page.stories.tsx
import { Meta, Story } from '@storybook/react';
import { MockedProvider } from '@apollo/client/testing';
import Page from '../app/page';
import { AllUsersQuery } from '../graphql/query/ALLUsersQuery';

export default {
 title: 'Page/Page',
 component: Page,
} as Meta;

const mocks = [
 {
  request: {
   query: AllUsersQuery,
  },
  result: {
   data: {
    users: [
     { id: '1', name: 'Utilisateur 1', email: 'utilisateur1@example.com' },
     { id: '2', name: 'Utilisateur 2', email: 'utilisateur2@example.com' },
     // Ajoutez autant d'utilisateurs factices que vous le souhaitez
    ],
   },
  },
 },
];

const Template: Story = (args) => (
 <MockedProvider mocks={mocks} addTypename={false}>
  <Page {...args} />
 </MockedProvider>
);

export const Default = Template.bind({});
