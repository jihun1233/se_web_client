import React from 'react';
import NumberButton from './NumberButton';
export default {
  component: NumberButton,
  title: 'default/NumberButton'
};
const Template = args => < NumberButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  text: 'test',
  onClick: ()=>{console.log('story')}
};