import React from 'react';
import MenuContainer from './MenuContainer';
import menuListMock from '../../../mocks/menuMock'

export default {
  component: MenuContainer,
  title: 'modules/MenuContainer'
};
const Template = args => < MenuContainer {...args} />;
export const Default = Template.bind({});


Default.args = {
  menuData: [
    {
      child: [],
      description: `s child Menu test Description`,
      menuId: 1,
      menuOrder: 1,
      nameEng: `Menu test Name in Eng`,
      nameKor: `Menu test1`,
      menuType: "BOARD",
      url: `menu test`
  },
  {
    child: [],
    description: `s child Menu test Description`,
    menuId: 2,
    menuOrder: 1,
    nameEng: `Menu test Name in Eng`,
    nameKor: `Menu test2`,
    menuType: "BOARD",
    url: `menu test`
},
{
  child: [],
  description: `s child Menu test Description`,
  menuId: 3,
  menuOrder: 1,
  nameEng: `Menu test Name in Eng`,
  nameKor: `Menu test3`,
  menuType: "BOARD",
  url: `menu test`
},
{
  child: [],
  description: `s child Menu test Description`,
  menuId: 4,
  menuOrder: 1,
  nameEng: `Menu test Name in Eng`,
  nameKor: `Menu test4`,
  menuType: "BOARD",
  url: `menu test`
},
{
  child: [],
  description: `s child Menu test Description`,
  menuId: 5,
  menuOrder: 1,
  nameEng: `Menu test Name in Eng`,
  nameKor: `Menu test5`,
  menuType: "BOARD",
  url: `menu test`
}
  ]
};