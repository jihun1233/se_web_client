const colors = {
  mainColor: '#00a0de',
  darkgray: '#636363',
  hover: '#f6f6f6',
  bottomBackground: '#414143',
  purple: '#9a58b1',
  black: 'black',
  white: 'white'
};

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px'
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`
};

const theme = {
  device,
  colors
};

export default theme;
