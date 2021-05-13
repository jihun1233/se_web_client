import React from 'react';
import Table from './Table';
export default {
  component: Table,
  title: 'default/Table'
};
const Template = args => < Table {...args} />;
export const Default = Template.bind({});
Default.args = {
  colgroup:[20, 80],
  theads:[
    <p>abc</p>, <p>222</p>
  ],
  tbodies:[
    [<p>bbb</p>, <p>bbb</p>],[<p>bbb</p>, <p>bbb</p>]
  ]
};