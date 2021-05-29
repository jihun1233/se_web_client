import React from 'react';
import AddTag from './AddTag';
export default {
  component: AddTag,
  title: 'templates/AddTag'
};
const Template = args => < AddTag {...args} />;
export const Default = Template.bind({});
Default.args = {

};