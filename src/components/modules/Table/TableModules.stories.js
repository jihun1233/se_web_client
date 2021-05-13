import React from 'react';
import TableModule from './TableModule';
export default {
  component: TableModule,
  title: 'modules/TableModule'
};
const Template = args => < TableModule {...args} />;
export const Default = Template.bind({});
Default.args = {
  colgroup:[20, 60, 10, 10],
  theads:[
    <button>abc</button>, <p>222</p>, 'a','b'
  ],
  tbodies:[
    [<p>bbb</p>, <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>, <p>bbb</p>, <p>bbb</p>],[<p>bbb</p>, <p>bbb</p>, <p>bbb</p>, <p>bbb</p>],[<p>bbb</p>, <p>bbb</p>, <p>bbb</p>, <p>bbb</p>],[<p>bbb</p>, <p>bbb</p>, <p>bbb</p>, <p>bbb</p>]
  ]
};