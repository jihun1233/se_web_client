import React from 'react';
import DefaultBoard from './DefaultBoard';
export default {
  component: DefaultBoard,
  title: 'templates/DefaultBoard'
};
const Template = args => < DefaultBoard {...args} />;
export const Default = Template.bind({});
Default.args = {
  match: {params: ''}
};