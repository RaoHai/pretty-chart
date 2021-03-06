import G2 from '@ali/g2';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from '../Charts/light.theme';
// G2.Global.setTheme(theme);
console.log('>> G2', G2.version);
const defaultIntervalConfig = {
  size: 10,
  xAxis: false,
  yAxis: false,
  range: [0.1, 0.9],
};

const IntervalConfigs = {
  small: { size: 10 },
  'very-small': { size: 7 },
  mini: { size: 6, range: [0.1, 0.9] },
  quarter: { size: 14, xAxis: true, yAxis: true },
  third: { size: 17 },
  default: { size: 17 },
  half: { size: 17 },
  large: { size: 17 },
  full: { size: 17, range: [0.05, 0.95] }
};

export default class Interval extends Component {
  static contextTypes = {
    size: PropTypes.string,
    title: PropTypes.any,
    colorSet: PropTypes.object,
  }
  constructor() {
    super();
    this.state = {
      chatId: `interval-chart-${Math.random()}`,
      hoverValues: null,
    };
    this._chart_inst = null;
  }
  componentDidMount() {
    this.renderChat();
  }
  componentDidUpdate(nextProps, nextState, nextContext) {
    if (nextContext !== this.context) {
      this.renderChat();
    }
  }
  renderChat = () => {
    if (this._chart_inst) {
      this._chart_inst.off('plotmove');
      this._chart_inst.destroy();
      this._chart_inst = null;
    }
    const { data, xAxis, yAxis, grid, size = this.context.size } = this.props;
    const { colorSet } = this.context;
    const config = { ...defaultIntervalConfig, ...IntervalConfigs[size] };
    const currentTheme = theme[size] || theme;
    
    const isTinyMode = ['small', 'very-small', 'mini', 'quarter'].indexOf(size) !== -1;
    const tooltipEnable = ['third', 'half'].indexOf(size) !== -1;
    const chart = new G2.Chart({
      ...currentTheme(xAxis, yAxis, grid, colorSet),
      id: this.state.chatId,
    });

    this._chart_inst = chart;
    chart.source(data, {
      [`${xAxis}`]: {
        range: config.range,
      },
      [`${yAxis}`]: {
        alias: '收支',
        type: 'linear',
        tickInterval: 10,
      },
      type: {
        type: 'cat',
        values: ['1', '0']
      }
    });

    if (isTinyMode) {
      if (size === 'quarter') {
        chart.guide().line([-1, 0], [data.length, 0], {
          stroke: colorSet.guide || '#9B9B9B', // 线的颜色
          lineDash: [0, 1, 1], // 虚线的设置
          lineWidth: 0.5 // 线的
        });
      } else {
        chart.guide().line([-100, 0], [10000, 0], {
          stroke: colorSet.guide || '#9B9B9B', // 线的颜色
          lineDash: [0, 1, 1], // 虚线的设置
          lineWidth: 0.5 // 线的
        });
      }

      if (!grid) {
        chart.on('plotmove', ev => {
          const shape = ev.shape;
          const point = {
            x: ev.x,
            y: ev.y
          };
        
          if (shape) {
            this.setState({
              hoverValues: shape.__cfg.origin,
            });
            if (this.interval) {
              clearTimeout(this.interval);
              this.interval = null;
            }
            this.interval = setTimeout(() => {
              this.setState({
                hoverValues: null,
              });
            }, 1000);
          } else {
            this.setState({
              hoverValues: null,
            });
          }
       });
      }
    }

    if (!tooltipEnable) {
      chart.tooltip({
        custom: true,
        html: '<div class="ac-tooltip" style="display: none;"/>',
      });
    }
    
    chart.interval()
      .shape('radiusInterval')
      .position(`${xAxis}*${yAxis}`)
      .color(`${yAxis}`, () => [colorSet.primary, colorSet.secondary, colorSet.border])
      .size(config.size || 10);
    chart.render();
    
    const frontCanvas = chart.get('frontCanvas');
    const activeGroup = frontCanvas.addGroup();
    
    // console.log('>> frontCanvas', frontCanvas);
    const canvas = frontCanvas.__cfg.canvasDOM;
    canvas.addEventListener('touchstart', ev => {
      const { targetTouches } = ev;
      var rect = ev.target.getBoundingClientRect();
      var x = targetTouches[0].clientX - rect.left;
      var y = targetTouches[0].clientY - rect.top;
      const point = {x, y};
      // console.log(' touchstart', rect, point);
      chart.showTooltip(point);
    });

    chart.on('tooltipchange', (ev) => {
      const item = ev.items[0];
      const values = ev.items[0].point._origin.y;
      item.value = `<ul>
        <li><span class="dot" style="background: ${colorSet.secondary};" ></span>最大值：${values[1]}</li>
        <li><span class="dot" style="background: ${colorSet.primary};"></span>最小值：${values[0]}</li>
      </ul>`;
    });
  }

  renderHoverValues = () => {
    const { hoverValues } = this.state;
    const { colorSet } = this.context;
    return ['upper', 'lower'].map((i, idx) => (<span
      className={`hover-value hover-value-${i}`}
      key={i}
      style={{ left: hoverValues.x, top: hoverValues.y[idx], color: colorSet.text.key }}
    >{hoverValues._origin.y[idx]}</span>)
    );
  }
  render() {
    const { chatId, hoverValues } = this.state;
    const { xAxis, yAxis, size = this.context.size } = this.props;
    const { title, colorSet } = this.context;
    const dynamicTitle = size === 'very-small' || size === 'mini';
    return (
      <div className="chart-wrapper interval-wrapper" ref={ele => this.chartContainer = ele}>
        <div id={chatId} />
        <div className="interval-header">
          {hoverValues ? this.renderHoverValues() : null}
          {hoverValues ? <span className="hover-active-value" style={{ color: colorSet.text.value}}>{hoverValues._origin[xAxis]}</span> : null}
          {hoverValues ? <span className="hover-active-key" style={{ color: colorSet.text.key}}>{hoverValues._origin[yAxis].join(',')}</span> : null}
          {dynamicTitle ?
            <span
              className={`dynamic-title ${!hoverValues ? 'show' : 'hide'}`}
              style={{ background: colorSet.background, color: colorSet.text.value }}
            >{title}</span>
          : null}
        </div>
      </div>
    );
  }
}
