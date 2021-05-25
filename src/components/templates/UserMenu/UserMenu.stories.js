import React from 'react';
import UserMenu from './UserMenu';
export default {
  component: UserMenu,
  title: 'templates/UserMenu'
};
const Template = args => < UserMenu {...args} />;
export const Default = Template.bind({});
Default.args = {

};