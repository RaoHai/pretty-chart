import 'pretty-chart/assets/index.less';
import 'pretty-chart/assets/default.less';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DeerCard from 'pretty-chart';
const { Row, Charts, Meta, Title, Footer, Percent } = DeerCard;

const PlaceHolder = ({ height, children }) => {
  return <div className="pretty-chart-placeholder" style={{ height, lineHeight: `${height}px` }} >{children}</div>; 
}

const DarkColorSet = {
  primary: '#B8E986',
  secondary: '#DDFFB8',
  border: '#FFFFFF',
  background: '#7EC855',
  highlightText: '#FFFFFF',
  text: {
    default: 'rgba(255, 255, 255, .6)',
    highlight: '#FFF',
    key: '#FFF',
    value: 'rgba(255, 255, 255, .6)',
  },
  meta: {
    title: 'rgba(255, 255, 255, .6)',
    value: '#FFFFFF',
  },
  guide: 'rgba(255, 255, 255, .5)',
  grid: 'rgba(0, 0, 0, .1)',
  xAxis: '#FFFFFF',
  yAxis: '#FFFFFF',
};

const data = [
  { x: '04-01 周一', y: [-10, 21] }, //{ x: 1, y: -10 },
  { x: '04-02 周二', y: [-11, 20] }, //{ x: 2, y: -11 },
  { x: '04-03 周三', y: [-12, 22] }, //{ x: 3, y: -12 },
  { x: '04-04 周四', y: [-16, 24] }, //{ x: 4, y: -16 },
  { x: '04-05 周五', y: [-10, 14] }, //{ x: 5, y: -10 },
];

const Card = ({ title, children, type = 'dark' }) => 
(<DeerCard
  size="third"
  title={ title ? '收入与支出' : null}
  colorSet={type === 'dark' ? DarkColorSet : defaultColorSet }
  footer={children}
>
    <Meta>
      <Meta.Item title="Average">24.6%</Meta.Item>
      <Meta.Item title="Average">103 / DAY</Meta.Item>
    </Meta>
    <Charts.Interval data={data} xAxis='x' yAxis='y' grid="rgba(255, 255, 255, .5)" />
  </DeerCard>);

const App = props => <div className="flex-container">
  <Row id="1" editable>
    <PlaceHolder height={300} > A </PlaceHolder>
  </Row>
</div>

ReactDOM.render(<App />, document.getElementById('__react-content'));

