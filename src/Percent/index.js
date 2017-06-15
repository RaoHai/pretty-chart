import React from 'react';
import PropTypes from 'prop-types';
import { defaultColorSet } from '../ColorSets';

const Percent = ({ title, value, type = 'normal' }, { colorSet = defaultColorSet }) => (<span className={`percent-wrapper percent-wrapper-${type}`}>
  {title ? <span className="percent-title">{title}</span> : null}
  <span className="percent-container">
    <span className="percent-content" style={{ width: value, background: colorSet.primary }} />
  </span>
  {type === 'large' ? <span className="percent-value">{value}</span> : null}
</span>);

Percent.contextTypes = {
  colorSet: PropTypes.object,
};


export default Percent;
