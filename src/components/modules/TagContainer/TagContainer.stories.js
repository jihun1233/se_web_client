import React from 'react';
import TagContainer from './TagContainer';
export default {
  component: TagContainer,
  title: 'modules/TagContainer'
};
const Template = args => < TagContainer {...args} />;
export const Default = Template.bind({});
Default.args = {
  tagData: [{tagId:1,tag:'tag1'},{tagId:2,tag:'tag2'},{tagId:3,tag:'tag3'},{tagId:4,tag:'tag4'}]
};