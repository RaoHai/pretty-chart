import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function PlaceHolder({ children, size, style }, { height }) {
  return <div
    className="pretty-chart-placeholder"
    style={{
      ...style,
      height,
      lineHeight: `${height}px`,
      flexGrow: size ? size : undefined,
    }}
  >{children}</div>; 
}


PlaceHolder.contextTypes = {
  height: PropTypes.oneOfType(
    [
      PropTypes.number,
      PropTypes.string,
    ]
  ),
}