---
title: 设置色板
order: 0
publishDate: 2016-05-05
tags: 
  - test
---

The first article which is posted by BiSheng.

---

Hello world!

````jsx
import DeerCard, { Row, PlaceHolder, Charts } from 'pretty-chart';
import { defaultColorSet, darkColorSet } from 'pretty-chart-colorsets';
import 'pretty-chart/styles/index.less';
import 'pretty-chart/styles/default.less';
import 'pretty-chart/styles/placeholder.less';

const data = [
  { x: '04-01 周一', y: [-10, 21] },
  { x: '04-02 周二', y: [-11, 20] },
  { x: '04-03 周三', y: [-12, 22] },
  { x: '04-04 周四', y: [-16, 24] },
  { x: '04-05 周五', y: [-10, 14] },
];

const customColorSet = {
  ...darkColorSet,
  background: '#5D6977',
  primary: '#57616D',
  secondary: '#99abc1',
};

const App = () => <Row>
  <DeerCard title="默认色板" colorSet={defaultColorSet}>
    <Charts.Interval data={data} xAxis='x' yAxis='y' />
  </DeerCard>
  
  <DeerCard title="深色色板" colorSet={darkColorSet}>
    <Charts.Interval data={data} xAxis='x' yAxis='y' />
  </DeerCard>

  <DeerCard title="自定义色板" colorSet={customColorSet}>
    <Charts.Interval data={data} xAxis='x' yAxis='y' />
  </DeerCard>
</Row>;

ReactDOM.render(<App />, mountNode);
````