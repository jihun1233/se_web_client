import React from 'react';
import SelectList from './SelectList';
export default {
  component: SelectList,
  title: 'modules/SelectList'
};
const Template = args => < SelectList {...args} />;
export const Default = Template.bind({});
Default.args = {
  textData: [
    {value:'a', text:'a'},
    {value:'b', text:'b'},
    {value:'c', text:'c'},
    {value:'d', text:'d'}
  ],
  selectData: 'a'
};