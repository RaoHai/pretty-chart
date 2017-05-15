import 'pretty-chart/assets/index.less';
import 'pretty-chart/assets/default.less';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DeerCard, { Charts, Meta, Title, Footer, Percent } from 'pretty-chart';


const App = () => <div style={{ width: 500, margin: '0 auto'}}>
  <Title> Type something </Title>
  <Meta style={{ marginTop: 50 }}>
    <Meta.Item title="业绩增长率"> + 24.6% <Percent value="24.6%" /></Meta.Item>
    <Meta.Item title="业绩增长率"> + 103单 / 天 <Percent value="50%" /> </Meta.Item>
  </Meta>
  <Meta style={{ marginTop: 50 }} type="vertical">
    <Meta.Item><Percent value="24.6%" type="large"/></Meta.Item>
    <Meta.Item><Percent value="15.6%" type="large"/></Meta.Item>
    <Meta.Item><Percent value="55.9%" type="large"/></Meta.Item>
  </Meta>

  <Meta style={{ marginTop: 50 }}>
    <Meta.Item><a> Type something </a></Meta.Item>
    <Meta.Item><a> Type something </a></Meta.Item>
  </Meta>
</div>
ReactDOM.render(<App />, document.getElementById('__react-content'));
