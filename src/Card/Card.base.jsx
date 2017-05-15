import React, { Component } from 'react';
import '../Charts/shape';
import prefixCls from '../utils/prefixCls';
import { defaultColorSet } from '../utils/constants';

const cls = prefixCls('deer-card');

class CardBase extends Component {
  static childContextTypes = {
    size: React.PropTypes.string,
    title: React.PropTypes.any,
    colorSet: React.PropTypes.object,
  }

  constructor() {
    super();
    this.chartInst = null;
  }

  getChildContext() {
    return {
      size: this.props.size,
      title: this.props.title,
      colorSet: this.props.colorSet || defaultColorSet,
    };
  }

  componentDidMount() {
   
  }

  componentWillUnmount() {
    if (this.chartInst) {
      this.chartInst.destroy();
      this.chartInst = null;
    }
  }

  render() {
    const { title, children, theme, className, size, footer, colorSet } = this.props;
    return (
      <div className={cls('', {
        dark: theme === 'dark',
        [`${size}`]: true,
      })}
        style={{ background: colorSet.background }}
      >
        {title ? <h3 className={cls('title')} style={{color: colorSet.highlightText }} >{title}</h3> : null}
        <div className={cls('content')}>{children}</div>
        {footer ? <div className={cls('footer')}>{footer}</div>: null}
      </div>
    );
  }
}

export default CardBase;