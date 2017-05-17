import React, { Component } from 'react';
import { defaultColorSet } from '../utils/constants';

export function Item({ title, children, center, type='normal' }, { colorSet = defaultColorSet }) {
  return <span 
    className={`meta-item meta-item-${type} ${center ? 'center' : ''}`}
    style={{ borderColor: colorSet.guide }}
  >
    {title ? <span className="meta-title" style={{ color: colorSet.meta.title}} >{title}</span> : null}
    {children ? <span className="meta-content" style={{ color: colorSet.meta.value}}>{children}</span> : null}
  </span>
}


Item.contextTypes = {
  colorSet: React.PropTypes.object,
}

export default function Meta({ children, style, vertical, type = 'normal' }, { colorSet = defaultColorSet}) {
  return <span className={`meta meta-${type}`} style={{ ...style, color: colorSet.meta.value}}>{children}</span>
}

Meta.contextTypes = {
  colorSet: React.PropTypes.object,
}

Meta.Item = Item;