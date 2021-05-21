import React from 'react';
import Body from './Body';
export default {
  component: Body,
  title: 'templates/Body'
};
const Template = args => < Body {...args} />;
export const Default = Template.bind({});
Default.args = {

};