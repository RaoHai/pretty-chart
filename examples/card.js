import 'pretty-chart/assets/index.less';
import 'pretty-chart/assets/default.less';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DeerCard, { Charts, Meta, Title, Footer, Percent } from 'pretty-chart';


const defaultColorSet = {
  primary: '#498306',
  highlightText: '#9B9B9B',
  secondary: '#7ED321',
  border: '#6BC00F',
  text: {
    default: '#9B9B9B',
    highlight: '#666',
    key: '#417505',
    value: '#9B9B9B',
  },
  meta: {
    title: '#9B9B9B',
    value: '#417505',
  },
  guide: 'rgba(0, 0, 0, .1)',
  grid: 'rgba(255, 255, 255, .5)',
  xAxis: '#B3B3B3',
  yAxis: '#B3B3B3',
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
}

const rawData = [
  { x: '04-01 周一', y: [-10, 21] }, //{ x: 1, y: -10 },
  { x: '04-02 周二', y: [-11, 20] }, //{ x: 2, y: -11 },
  { x: '04-03 周三', y: [-12, 22] }, //{ x: 3, y: -12 },
  { x: '04-04 周四', y: [-16, 24] }, //{ x: 4, y: -16 },
  { x: '04-05 周五', y: [-10, 14] }, //{ x: 5, y: -10 },
  { x: '04-06 周六', y: [-9, 14] },
  { x: '04-07 周日', y: [-12, 15] },
  { x: '04-08 周一', y: [-14, 11] },
  { x: '04-09 周二', y: [-15, 10] },
  { x: '04-10 周三', y: [-14, 15] },
  { x: '04-11 周四', y: [-13, 16] },
  { x: '04-12 周五', y: [-8, 4] },
  { x: '04-13 周六', y: [-5, 6] },
  { x: '04-14 周日', y: [-2, 7] },
  { x: '04-15 周一', y: [-7, 10] },
  { x: '04-16 周二', y: [-8, 12] },
  { x: '04-17 周三', y: [-12, 15] },
].map(d => ({...d, type: d.y > 0 ? '1' : '0'}));

const data = rawData.slice(0 , 5);

const Card = ({ children, type = 'dark' }) => 
(<DeerCard
  size="third"
  title="收入与支出"
  colorSet={type === 'dark' ? DarkColorSet : defaultColorSet }
  footer={children}
>
    <Meta>
      <Meta.Item title="Average">24.6%</Meta.Item>
      <Meta.Item title="Average">103 / DAY</Meta.Item>
    </Meta>
    <Charts.Interval data={data} xAxis='x' yAxis='y' grid="rgba(255, 255, 255, .5)" />
  </DeerCard>);

const Card2 = ({ children, type = 'dark' }) => 
(<DeerCard
  size="third"
  title="收入与支出"
  colorSet={type === 'dark' ? DarkColorSet : defaultColorSet }
  footer={children}
>
    <Charts.Interval data={data} xAxis='x' yAxis='y' grid="rgba(0, 0, 0, .1)" />
    <Meta>
      <Meta.Item title="Average">24.6%</Meta.Item>
      <Meta.Item title="Maximun">+ 103</Meta.Item>
      <Meta.Item title="Minimum">- 30</Meta.Item>
    </Meta>
 </DeerCard>);

const App = () => <div className="flex-container">
  <div className="row">
    <Card>
      <Meta>
        <Meta.Item title="业绩增长率"> 24.6% <Percent value="24.6%" /></Meta.Item>
        <Meta.Item title="业绩增长"> 103单 / 天 <Percent value="50%" /> </Meta.Item>
      </Meta>
    </Card>
    <Card>
      <Meta type="vertical">
        <Meta.Item><Percent title="最近利润率" value="24.6%" type="large"/></Meta.Item>
        <Meta.Item><Percent title="完成率" value="15.6%" type="large"/></Meta.Item>
        <Meta.Item><Percent title="增长利率" value="55.9%" type="large"/></Meta.Item>
      </Meta>
    </Card>
    <Card>
      <Meta type="closely">
        <Meta.Item center><a> 立即支出 </a></Meta.Item>
        <Meta.Item center><a> 转账收入 </a></Meta.Item>
      </Meta>
    </Card>
  </div>

  <div className="row">
    <Card2 type="normal">
      <Meta>
        <Meta.Item title="业绩增长率"> 24.6% <Percent value="24.6%" /></Meta.Item>
        <Meta.Item title="业绩增长率"> 103单 / 天 <Percent value="50%" /> </Meta.Item>
      </Meta>
    </Card2>
    <Card2 type="normal">
      <Meta type="vertical">
        <Meta.Item><Percent title="最近利润率" value="24.6%" type="large"/></Meta.Item>
        <Meta.Item><Percent title="周期利润率" value="15.6%" type="large"/></Meta.Item>
        <Meta.Item><Percent title="劝你利润率" value="55.9%" type="large"/></Meta.Item>
      </Meta>
    </Card2>
    <Card2 type="normal">
      <Meta type="closely">
        <Meta.Item center><a> Type something </a></Meta.Item>
        <Meta.Item center><a> Type something </a></Meta.Item>
      </Meta>
    </Card2>
  </div>
</div>

ReactDOM.render(<App />, document.getElementById('__react-content'));
