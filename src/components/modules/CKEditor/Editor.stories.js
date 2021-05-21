import React from 'react';
import Editor from './Editor';
export default {
  component: Editor,
  title: 'modules/Editor'
};
const Template = args => < Editor {...args} />;
export const Default = Template.bind({});
Default.args = {

};