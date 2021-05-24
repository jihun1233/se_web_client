import React from 'react';
import TextField from './TextField';

export default {
  component: TextField,
  title: 'atoms/TextField'
};
const Template = args => < TextField {...args} />;
export const Default = Template.bind({});
Default.args = {

};