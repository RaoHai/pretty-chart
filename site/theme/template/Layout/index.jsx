import React, { Component, cloneElement } from 'react';
import Header from './Header';

import '../../static/style';
import './index.less';

export default class Layout extends React.Component {
  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }
  render() {
    const { children } = this.props;
    return <div>
      <Header />
      <div className="main-wrapper">
        {cloneElement(children, { onEnterChange: this.onEnterChange })}
      </div>
    </div>
  }
}
