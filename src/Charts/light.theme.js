import G2 from '@ali/g2';

const defaulTheme = xAxis => ({
  ...G2.Theme,
  plotCfg: {
    margin: [20, 80, 60, 80],
  },
  shapes: {
    interval: ['radiusInterval']
  },
  options: {
    axis: {
      [`${xAxis}`]: {
        labels: { label: { fill: '#ccc' }, autoRotate: false },
      },
    }
  }
});

const smallTheme = (xAxis, yAxis) => ({
  ...G2.Theme,
  plotCfg: {
    margin: [0, 10, 22, 10],
  },
  forceFit: true,
  height: 140,
  shapes: {
    interval: ['radiusInterval']
  },
  options: {
    axes: {
      [`${xAxis}`]: {
        labels: null,
        line: null,
        tickLine: null,
      },
      [`${yAxis}`]: {
        line: null,
        tickLine: null,
        grid: null
      }
    },
  }
});

const mediumTheme = (xAxis, yAxis, grid = false, colorSet, fontSize = 10) => {
  let gridConfig = {};
  if (!grid) {
    gridConfig.grid = {
      line: {
        stroke: colorSet.grid,
        lineDash: [4, 4],
      }
    };
  }
  if (typeof grid === 'object') {
    gridConfig.grid = grid;
  } else if (typeof grid === 'string') {
    gridConfig = {
      grid: {
        line: {
          stroke: grid,
          lineDash: [4, 4],
        }
      }
    };
  }

  return {
    ...G2.Theme,
    plotCfg: {
      margin: [5, 10, 24, 50],
    },
    forceFit: true,
    height: 140,
    shapes: {
      interval: ['radiusInterval']
    },
    options: {
      legends: { visible: false },
      axes: {
        [`${xAxis}`]: {
          title: false,
          labels: { label: { fill: colorSet.xAxis || '#9B9B9B', fontSize }, autoRotate: true },
          tickLine: null,
          formatter(value) { return value.substring(0, 5); },
          line: {
            stroke: colorSet.guide,
            lineDash: [4, 4],
          },
          labelOffset: 20,
        },
        [`${yAxis}`]: {
          ...gridConfig,
          title: false,
          labels: { label: { fill: colorSet.yAxis || '#9B9B9B', fontSize }, autoRotate: false },
          line: null,
          tickLine: null,
        },
      },
    }
  };
};

export default {
  ...defaulTheme,
  large: (...args) => ({ ...mediumTheme(...args, 12), height: 230, plotCfg: { margin: [20, 44, 40, 74] } }),
  full: (...args) => ({ ...mediumTheme(...args, 12), height: 230, plotCfg: { margin: [20, 44, 40, 74] } }),
  quarter: mediumTheme,
  default: (...args) => ({ ...mediumTheme(...args, 12), height: 230, plotCfg: { margin: [20, 44, 40, 74] } }),
  third: (...args) => ({ ...mediumTheme(...args, 12), height: 230, plotCfg: { margin: [20, 44, 40, 74] } }),
  half: (...args) => ({ ...mediumTheme(...args, 12), height: 230, plotCfg: { margin: [20, 44, 40, 74] } }),
  small: smallTheme,
  'very-small': (...args) => ({ ...smallTheme(...args), height: 65, plotCfg: { margin: [15, 10, 5, 10] } }),
  mini: (...args) => ({ ...smallTheme(...args), height: 50, plotCfg: { margin: [0, 10, 5, 10] } }),
};
