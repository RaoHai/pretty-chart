---
title: Charts-footer-demo
order: 3
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
    <PlaceHolder> Chart - 无 footer </PlaceHolder>
  </DeerCard>

  <DeerCard type="placeholder" footer="简单文字 footer">
    <PlaceHolder> Chart </PlaceHolder>
  </DeerCard>

  <DeerCard type="placeholder" footer={<span>
    复杂 footer <span style={{float: 'right', color: '#417505'}}> 24.6%</span>
  </span>}>
    <PlaceHolder> Chart </PlaceHolder>
  </DeerCard>
</Row>;

ReactDOM.render(<App />, mountNode);
````