---
title: Charts-title-demo
order: 2
publishDate: 2016-05-05
tags: 
  - test
---

The first article which is posted by BiSheng.

---

Hello world!

````jsx
import DeerCard, { Row, PlaceHolder } from 'pretty-chart';
import 'pretty-chart/styles/index.less';
import 'pretty-chart/styles/default.less';
import 'pretty-chart/styles/placeholder.less';

const App = () => <Row>
  
  <DeerCard type="placeholder">
    <PlaceHolder> Chart - 无 title </PlaceHolder>
  </DeerCard>

  <DeerCard type="placeholder" title="简单文字 title">
    <PlaceHolder> Chart </PlaceHolder>
  </DeerCard>

  <DeerCard type="placeholder" title={<span>
    复杂 title <span style={{float: 'right', color: '#417505'}}> 24.6%</span>
  </span>}>
    <PlaceHolder> Chart </PlaceHolder>
  </DeerCard>
</Row>;

ReactDOM.render(<App />, mountNode);
````