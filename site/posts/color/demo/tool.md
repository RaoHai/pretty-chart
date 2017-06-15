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
import { Icon, message } from 'antd';
import DeerCard, { Row, PlaceHolder, Charts, Meta } from 'pretty-chart';
import { defaultColorSet, darkColorSet } from 'pretty-chart-colorsets';
import ConfigRender from 'pretty-chart-colorsets/ConfigRender';
import CopyToClipBoard from 'react-copy-to-clipboard';

import 'antd/lib/icon/style';
import 'antd/lib/message/style';
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

const CopyIcon = ({ text, onCopy }) => <CopyToClipBoard text={text} onCopy={onCopy}>
  <Icon type="copy" className="copy-icon" />
</CopyToClipBoard>

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
  onCopy() {
    message.success('复制成功！');
  },
  render() {
    const { currentColorSet } = this.state;
    const colorSetStr = JSON.stringify(currentColorSet, null, 2);
    return <Row>
      <DeerCard title="预览" colorSet={currentColorSet}>
        <Charts.Interval data={data} xAxis='x' yAxis='y' />
        <Meta>
          <Meta.Item title="meta-title">meta-value</Meta.Item>
          <Meta.Item title="meta-title">meta-value</Meta.Item>
        </Meta>
      </DeerCard>
      <DeerCard title="配置器">
        <ConfigRender colorSet={currentColorSet} onChange={this.updateColorSet}/>
      </DeerCard>
      <DeerCard title={<span>
        配置
        <CopyIcon text={colorSetStr} onCopy={this.onCopy} />
      </span>}>
        <pre className="config-code">
          <code>{colorSetStr}</code>
        </pre>
      </DeerCard>
    </Row>;
  }
});

ReactDOM.render(<App />, mountNode);
````