import React from 'react';
import HorizonBar from './HorizonBar';

export default {
  component: HorizonBar,
  title: 'default/HorizonBar'
};
const Template = args => <HorizonBar {...args} />;
export const Default = Template.bind({});
Default.args = {};
