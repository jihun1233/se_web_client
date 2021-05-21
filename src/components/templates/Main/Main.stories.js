import React from 'react';
import Main from './Main';
export default {
  component: Main,
  title: 'templates/Main'
};
const Template = args => < Main {...args} />;
export const Default = Template.bind({});
Default.args = {
  
};