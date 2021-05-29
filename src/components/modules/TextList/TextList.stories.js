import React from 'react';
import TextList from './TextList';
export default {
  component: TextList,
  title: 'modules/TextList'
};
const Template = args => < TextList {...args} />;
export const Default = Template.bind({});
Default.args = {

};