import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';

import '../Charts/shape';
import prefixCls from '../utils/prefixCls';
import { defaultColorSet } from '../ColorSets/index';
import './index.less';

const cls = prefixCls('deer-card');

class CardBase extends Component {
  static childContextTypes = {
    size: PropTypes.string,
    title: PropTypes.any,
    colorSet: PropTypes.object,
    clientHeight: PropTypes.number,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }

  static contextTypes = {
    height: PropTypes.number,
  };

  static defaultProps = {
    colorSet: defaultColorSet,
    size: 'default',
  };

  constructor() {
    super();
    this.chartInst = null;
    this.state = {
      configureMode: false,
    };
  }

  getChildContext() {
    return {
      size: this.props.size,
      title: this.props.title,
      colorSet: this.props.colorSet || defaultColorSet,
      height: 'auto',
    };
  }

  showConfigurationDialog = () => {
    this.setState({
      configureMode: true,
    });
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    if (this.chartInst) {
      this.chartInst.destroy();
      this.chartInst = null;
    }
  }

  renderConfigures = () => {
    const { title, footer } = this.props;
    return (<Dialog title="卡片组件配置" visible onClose={() => this.setState({ configureMode: false })} maskClosable>
      <ul>
        {title ? <input type="checkbox" /> : null}
        {footer ? <input type="checkbox" /> : null}
      </ul>
    </Dialog>);
  }

  getType = () => {
    const { type, size } = this.props;
    if (type) {
      return type;
    }
    if (size === 'large' || size === 'full') {
      return 'vertical';
    }
  }

  render() {
    const { title, children, theme, size, footer, colorSet } = this.props;
    const { configureMode } = this.state;
    const contextHeight = this.context.height;

    const type = this.getType();
    return (
      <div className={cls('', {
        dark: theme === 'dark',
        [`${size}`]: true,
        [`${type}`]: true,
        type,
        hasTitle: !!title,
      })}
        style={{ background: colorSet.background, minHeight: contextHeight }}
      >
        {title ?
          <h3 className={cls('title')} style={{ color: colorSet.highlightText }} >{title}</h3>
        : null}
        <div className="card-controllers">
          <span
            onClick={() => this.showConfigurationDialog()}
            className="iconfont icon-shezhi"
          />
        </div>
        <div
          className={cls('content')}
          ref={ele => this.chartContainer = ele}
        >{children}</div>
        {footer ? <div className={cls('footer')}>{footer}</div> : null}
        {configureMode ? this.renderConfigures() : null}
      </div>
    );
  }
}

export default CardBase;
