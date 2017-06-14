---
title: Charts-meta-demo
order: 3
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

const App = () => <Row ratio="1:2">
  <DeerCard title="Meta">
    <Meta>
      <Meta.Item title="整行"> full width</Meta.Item>
    </Meta>
    
    <Meta>
      <Meta.Item title="两列"> 1 </Meta.Item>
      <Meta.Item title="两列"> 2 </Meta.Item>
    </Meta>
    
    <Meta>
      <Meta.Item title="三列"> 1 </Meta.Item>
      <Meta.Item title="三列"> 2 </Meta.Item>
      <Meta.Item title="三列"> 3 </Meta.Item>
    </Meta>
  </DeerCard>

  <DeerCard title="纵向 Meta" type="vertical">
    <Meta>
      <Meta.Item title="两行"> 1 </Meta.Item>
      <Meta.Item title="两行"> 2 </Meta.Item>
    </Meta>
    
    <Meta>
      <Meta.Item title="三行"> 1 </Meta.Item>
      <Meta.Item title="三行"> 2 </Meta.Item>
      <Meta.Item title="三行"> 3 </Meta.Item>
    </Meta>
    
    <Charts.Interval size="half" data={data} xAxis='x' yAxis='y'/>
  </DeerCard>
</Row>;

ReactDOM.render(<App />, mountNode);
````