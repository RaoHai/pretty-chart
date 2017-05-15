import React, { Component } from 'react';

const Percent = ({ title, value, type = 'normal'}) => <span className={`percent-wrapper percent-wrapper-${type}`}>
    {title ? <span className="percent-title">{title}</span> : null}
    <span className="percent-container">
        <span className="percent-content" style={{ width: value }} />
    </span>
    {type === 'large' ? <span className="percent-value">{value}</span> : null}
</span>;

export default Percent;