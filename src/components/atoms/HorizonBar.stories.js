// HorizonBar.stories.js

import React from 'react';
import HorizonBar from './HorizonBar';

export default {
  title: 'atoms/HorizonBar',
  component: HorizonBar
};

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/jsx-props-no-spreading
const Template = args => <HorizonBar {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
export const Default = Template.bind({});
Primary.args = {};
