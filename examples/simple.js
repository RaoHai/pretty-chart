// use jsx to render html, do not modify simple.html

import 'rc-deer-card/assets/index.less';
import DeerCard from 'rc-deer-card';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div style={{ width: 1024, margin: '0 auto'}}>
    <div className="row">
      <DeerCard size="full" title="Type something" />
    </div>

    <div className="row">
      <DeerCard size="large" title="Type something" />
      <DeerCard size="third" title="Type something" />
    </div>

    <div className="row">
      <DeerCard size="half" title="Type something" />
      <DeerCard size="half" title="Type something" />
    </div>
  

    <div className="row">
      <DeerCard size="third" title="Type something" />
      <DeerCard size="third" title="Type something" />
      <DeerCard size="third" title="Type something" />
    </div>
    
    <div className="row">
      <DeerCard size="quarter" title="Type something" />
      <DeerCard size="quarter" title="Type something" />
      <DeerCard size="quarter" title="Type something" />
      <DeerCard size="quarter" title="Type something" />
    </div>

    <div className="row">
      <DeerCard size="small" title="Type something" />
      <DeerCard size="small" title="Type something" />
      <DeerCard size="small" title="Type something" />
      <DeerCard size="small" title="Type something" />
    </div>
  </div>
, document.getElementById('__react-content'));
