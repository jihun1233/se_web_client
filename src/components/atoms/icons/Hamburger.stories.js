// Hamburger.stories.js

import React from 'react';
import Hamburger from './Hamburger';

export default {
  title: 'atoms/icons/Hamburger',
  component: Hamburger
};

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/jsx-props-no-spreading
const Template = args => <Hamburger {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
export const Default = Template.bind({});
Primary.args = {};
