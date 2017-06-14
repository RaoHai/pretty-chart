import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { defaultColorSet } from '../utils/constants';

import './index.less';

function renderMetaItem(children) {
  const childArr = React.Children.toArray(children);
  if (childArr.length > 6) {
    console.warn('Meta 最多只支持 6 个 <Meta.Item />. 多余的 <Meta.Item /> 将被抛弃。');
  }
  return childArr.slice(0, 6);
}

export function Item({ title, children, center, type = 'normal' }, { colorSet = defaultColorSet }) {
  return (<span
    className={`meta-item meta-item-${type} ${center ? 'center' : ''}`}
    style={{ borderColor: colorSet.guide }}
  >
    {title ? <span className="meta-title" style={{ color: colorSet.meta.title }} >{title}</span> : null}
    {children ? <span className="meta-content" style={{ color: colorSet.meta.value }}>{children}</span> : null}
  </span>);
}


Item.contextTypes = {
  colorSet: PropTypes.object,
};

export default function Meta({ children, style, vertical, type = 'normal', bordered }, { colorSet = defaultColorSet }) {
  const cls = classnames({
    meta: true,
    [`meta-${type}`]: true,
    bordered,
  });
  return <span className={cls} style={{ ...style, color: colorSet.meta.value, borderColor: colorSet.guide }}>{renderMetaItem(children)}</span>;
}

Meta.contextTypes = {
  colorSet: PropTypes.object,
};

Meta.Item = Item;
