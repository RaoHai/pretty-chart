---
title: 图表尺寸
order: 1
publishDate: 2016-05-05
tags: 
  - test
---

The first article which is posted by BiSheng.

---

Hello world!

````jsx
import DeerCard, { Row, PlaceHolder, Meta, Charts } from 'pretty-chart';
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

const extData = [
  { x: '04-07 周日', y: [-12, 15] },
  { x: '04-08 周一', y: [-14, 11] },
  { x: '04-09 周二', y: [-15, 10] },
  { x: '04-10 周三', y: [-14, 15] },
  { x: '04-11 周四', y: [-13, 16] },
];

const Metas = props => <Meta {...props}>
  <Meta.Item title="Type">24.6%</Meta.Item>
  <Meta.Item title="Type">24.6%</Meta.Item>
  <Meta.Item title="Type">24.6%</Meta.Item>
</Meta>;

const App = () => <div>
  <Row height="auto">
    <DeerCard size="mini">
      <Charts.Interval data={data} xAxis='x' yAxis='y' />
    </DeerCard>
    
    <DeerCard size="very-small">
      <Charts.Interval data={data} xAxis='x' yAxis='y' />
    </DeerCard>

    <DeerCard size="small">
      <Charts.Interval data={data} xAxis='x' yAxis='y' />
    </DeerCard>

    <DeerCard size="quarter">
      <Charts.Interval data={data} xAxis='x' yAxis='y' />
    </DeerCard>

    <DeerCard size="third">
      <Charts.Interval data={data} xAxis='x' yAxis='y' />
    </DeerCard>
  </Row>

  <Row>
    <DeerCard size="half">
      <Charts.Interval data={data} xAxis='x' yAxis='y' />
    </DeerCard>
  </Row>

  <Row>
    <DeerCard size="large">
      <Charts.Interval data={data} xAxis='x' yAxis='y' />
    </DeerCard>
  </Row>

  <Row>
    <DeerCard size="full">
      <Charts.Interval data={data.concat(extData)} xAxis='x' yAxis='y' />
    </DeerCard>
  </Row>
</div>

ReactDOM.render(<App />, mountNode);
````