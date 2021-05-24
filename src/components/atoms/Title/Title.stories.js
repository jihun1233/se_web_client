import React from 'react';
import Title from './Title';
export default {
  component: Title,
  title: 'atoms/Title'
};
const Template = args => < Title {...args} />;
export const Default = Template.bind({});
Default.args = {

};