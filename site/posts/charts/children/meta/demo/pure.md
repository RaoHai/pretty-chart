---
title: 纯 Meta 卡片
order: 3
publishDate: 2016-05-05
tags: 
  - test
---

The first article which is posted by BiSheng.

---

纯 Meta 卡片是仅由 Meta 元素构成的卡片组件。

````jsx
import DeerCard, { Row, PlaceHolder, Meta, Charts, Percent } from 'pretty-chart';
import 'pretty-chart/styles/index.less';
import 'pretty-chart/styles/default.less';
import 'pretty-chart/styles/placeholder.less';


const App = () => <Row>
  <DeerCard>
    <Meta>
      <Meta.Item title="两列"> 1</Meta.Item>
      <Meta.Item title="两列"> 2</Meta.Item>
    </Meta>

    <Meta>
      <Meta.Item title="两列"> 1</Meta.Item>
      <Meta.Item title="两列"> 2</Meta.Item>
    </Meta>

    <Meta>
      <Meta.Item title="两列"> 1</Meta.Item>
      <Meta.Item title="两列"> 2</Meta.Item>
    </Meta>
  </DeerCard>

  <DeerCard>
    <Meta>
      <Meta.Item title=""> 标题</Meta.Item>
      <Meta.Item title="" />
    </Meta>
    <Meta>
      <Meta.Item title="两列"> 1 </Meta.Item>
      <Meta.Item title="两列"> 2 </Meta.Item>
    </Meta>
    <Meta>
      <Meta.Item title="两列"> 1 </Meta.Item>
      <Meta.Item title="两列"> 2 </Meta.Item>
    </Meta>
  </DeerCard>

  <DeerCard>
    <Meta>
      <Meta.Item > 小图表 </Meta.Item>
      <Meta.Item />
    </Meta>

    <Meta>
      <Meta.Item title="迷你柱状图"> <Percent value="24.6%" /> </Meta.Item>
      <Meta.Item title="迷你柱状图"> <Percent value="45%" /> </Meta.Item>
    </Meta>

    <Meta>
      <Meta.Item title="两列"> 1 </Meta.Item>
      <Meta.Item title="两列"> 2 </Meta.Item>
    </Meta>
  </DeerCard>
</Row>;

ReactDOM.render(<App />, mountNode);
````