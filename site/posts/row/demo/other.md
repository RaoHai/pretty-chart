---
title: 比例关系
order: 4
---

The first article which is posted by BiSheng.

---

Hello world!

````jsx

import { Row, PlaceHolder } from 'pretty-chart';
import 'pretty-chart/styles/index.less';
import 'pretty-chart/styles/default.less';

const App = props => <div className="flex-container">
  <Row ratio="2:1">
    <PlaceHolder> A </PlaceHolder>
    <PlaceHolder> B </PlaceHolder>
  </Row>
  
  <Row ratio="2:1:1">
    <PlaceHolder> A </PlaceHolder>
    <PlaceHolder> B </PlaceHolder>
    <PlaceHolder> C </PlaceHolder>
  </Row>
</div>

ReactDOM.render(<App />, mountNode);
````