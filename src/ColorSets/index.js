const colorSetTemplate = {
  primary: '#fff',
  secondary: '#fff',
  border: '#fff',
  background: '#fff',
  highlightText: '#fff',
  text: {
    default: '#fff',
    highlight: '#fff',
    key: '#fff',
    value: '#fff',
  },
  meta: {
    title: '#fff',
    value: '#FFF',
  },
  guide: '#fff',
  grid: '#fff',
  xAxis: '#FFF',
  yAxis: '#FFF',
};

export const defaultColorSet = {
  ...colorSetTemplate,
  primary: '#5da707',
  highlightText: '#9B9B9B',
  secondary: '#7ED321',
  border: '#6BC00F',
  text: {
    default: '#9B9B9B',
    highlight: '#666',
    key: '#417505',
    value: '#9B9B9B',
  },
  meta: {
    title: '#9B9B9B',
    value: '#417505',
  },
  guide: 'rgba(0, 0, 0, .1)',
  grid: 'rgba(0, 0, 0, .1)',
  xAxis: '#B3B3B3',
  yAxis: '#B3B3B3',
};

export const darkColorSet = {
  ...colorSetTemplate,
  primary: '#B8E986',
  secondary: '#DDFFB8',
  border: '#FFFFFF',
  background: '#7EC855',
  highlightText: '#FFFFFF',
  text: {
    default: 'rgba(255, 255, 255, .6)',
    highlight: '#FFF',
    key: '#FFF',
    value: 'rgba(255, 255, 255, .6)',
  },
  meta: {
    title: 'rgba(255, 255, 255, .6)',
    value: '#FFFFFF',
  },
  guide: 'rgba(255, 255, 255, .5)',
  grid: 'rgba(255, 255, 255, .5)',
  xAxis: '#FFFFFF',
  yAxis: '#FFFFFF',
};
