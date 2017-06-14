---
title: 图表组混合 - 复杂示例 
order: 3
---

The first article which is posted by BiSheng.

---

Hello world!

````jsx

import DeerCard, { Row, Meta, PlaceHolder } from 'pretty-chart';
import 'pretty-chart/styles/index.less';
import 'pretty-chart/styles/default.less';
import 'pretty-chart/styles/placeholder.less';

const App = () => <Row ratio="1:2">
  <DeerCard type="placeholder">
    <Meta>
      <Meta.Item title="数据集发生占比" > 30.4% </Meta.Item>
      <Meta.Item title="数据集发生占比" > 73.4% </Meta.Item>
    </Meta>
    <PlaceHolder style={{marginTop: 16, borderTop: '1px dashed #979797'}}> Chart </PlaceHolder>
  </DeerCard>

  <DeerCard type="placeholder">
    <PlaceHolder> Chart </PlaceHolder>
    <PlaceHolder> Chart </PlaceHolder>
  </DeerCard>
</Row>;

ReactDOM.render(<App />, mountNode);
````