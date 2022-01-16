// TransitionHorizonBar.stories.js

import React from 'react';
import TransitionHorizonBar from './TransitionHorizonBar';

export default {
  title: 'atoms/TransitionHorizonBar',
  component: TransitionHorizonBar
};

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/jsx-props-no-spreading
const Template = args => <TransitionHorizonBar {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
export const Default = Template.bind({});
Primary.args = {};
