import React from 'react';
import Tag from './Tag';
export default {
  component: Tag,
  title: 'atoms/Tag'
};
const Template = args => < Tag {...args} />;
export const Default = Template.bind({});
Default.args = {
  tagName:'tagName'
};