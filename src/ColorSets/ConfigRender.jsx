import React, { Component } from 'react';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import Colr from 'colr';

import './index.less';

function parseColor(string) {
  if (string.indexOf('#') === 0) {
    return {
      color: string,
      alpha: 100,
    };
  }
  const matches = /rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})(,(.*))\)/g.exec(string);
  if (!matches) {
    return { color: '#000', alpha: 100 };
  }

  return {
    color: Colr.fromRgb(Number(matches[1]), Number(matches[2]), Number(matches[3])).toHex(),
    alpha: Number(matches[5]) * 100,
  };
}

function getRGBAFromColr({ color, alpha }) {
  const [r, g, b] = Colr.fromHex(color).toRgbArray();
  return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
}
export default class ConfigRender extends Component {
  onChange = (obj) => {
    this.props.onChange({
      ...this.props.colorSet,
      ...obj
    });
  }

  renderConfig = (onChange = this.onChange, colorSet = this.props.colorSet) => {
    const result = [];
    const keys = Object.keys(colorSet);
    const len = keys.length;
    for (let idx = 0; idx < len; idx += 1) {
      const key = keys[idx];
      const line = colorSet[key];
      if (typeof line === 'string') {
        const { color, alpha } = parseColor(line);
        result.push(<li key={key}>
          {key}:<ColorPicker
            animation="slide-up"
            color={color}
            alpha={alpha}
            onChange={colors => onChange({
              ...colorSet,
              [`${key}`]: getRGBAFromColr(colors),
            })}
          />
        </li>);
      } else if (typeof line === 'object') {
        result.push(<li key={key}>
          {key}:{this.renderConfig(obj => onChange({
            [`${key}`]: obj,
          }), line)}
        </li>);
      } else {
        return null;
      }
    }
    return <ul>{result}</ul>;
  }
  render() {
    return <div className="config-render">{this.renderConfig()}</div>;
  }
}
