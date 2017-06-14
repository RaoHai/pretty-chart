---
title: 色板配置工具
order: 1
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
import ConfigRender from 'pretty-chart-colorsets/ConfigRender';

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

const App = React.createClass({
  getInitialState() {
    return {
      currentColorSet: darkColorSet,
    };
  },
  updateColorSet(colorSet) {
    this.setState({
      currentColorSet: colorSet,
    });
  },
  render() {
    const { currentColorSet } = this.state;
    return <Row>
      <DeerCard title="预览" colorSet={currentColorSet}>
        <Charts.Interval data={data} xAxis='x' yAxis='y' />
      </DeerCard>
      <DeerCard title="配置器">
        <ConfigRender colorSet={currentColorSet} onChange={this.updateColorSet}/>
      </DeerCard>
      <DeerCard title="配置">
        <pre className="config-code">
          <code>{JSON.stringify(currentColorSet, null, 2)}
          </code>
        </pre>
      </DeerCard>
    </Row>;
  }
});

ReactDOM.render(<App />, mountNode);
````