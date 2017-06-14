---
title: 图表组排列 
order: 0
---

The first article which is posted by BiSheng.

---

Hello world!

````jsx

import DeerCard, { Row, Meta, PlaceHolder } from 'pretty-chart';
import 'pretty-chart/styles/index.less';
import 'pretty-chart/styles/default.less';
import 'pretty-chart/styles/placeholder.less';

const App = () => <Row>
  <DeerCard type="placeholder"><PlaceHolder> Chart </PlaceHolder></DeerCard>
  
  <DeerCard type="placeholder">
    <PlaceHolder> Chart </PlaceHolder>
    <Meta>
      <Meta.Item title="Meta">1</Meta.Item>
    </Meta>
  </DeerCard>

  <DeerCard type="placeholder">
    <Meta>
      <Meta.Item title="Meta">1</Meta.Item>
    </Meta>
    <PlaceHolder> Chart </PlaceHolder>
    <Meta>
      <Meta.Item title="Meta">1</Meta.Item>
    </Meta>
  </DeerCard>
</Row>;

ReactDOM.render(<App />, mountNode);
````