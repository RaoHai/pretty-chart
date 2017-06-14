---
title: 图表组混合 
order: 2
---

The first article which is posted by BiSheng.

---

Hello world!

````jsx

import DeerCard, { Row, PlaceHolder } from 'pretty-chart';
import 'pretty-chart/styles/index.less';
import 'pretty-chart/styles/default.less';
import 'pretty-chart/styles/placeholder.less';

const App = () => <Row ratio="2:1">
  <DeerCard type="placeholder">
    <PlaceHolder> Chart </PlaceHolder>
    <PlaceHolder> Chart </PlaceHolder>
  </DeerCard>

  <DeerCard type="placeholder">
    <PlaceHolder> Chart </PlaceHolder>
    <PlaceHolder> Chart </PlaceHolder>
  </DeerCard>
</Row>;

ReactDOM.render(<App />, mountNode);
````