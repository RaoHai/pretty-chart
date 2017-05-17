// use jsx to render html, do not modify simple.html

import 'pretty-chart/assets/index.less';
import 'pretty-chart/assets/default.less';

import DeerCard from 'pretty-chart';

const { Charts, Meta } = DeerCard;
import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'rc-checkbox';

const rawData = [
  { x: '04-01 周一', y: [-10, 21] }, //{ x: 1, y: -10 },
  { x: '04-02 周二', y: [-11, 20] }, //{ x: 2, y: -11 },
  { x: '04-03 周三', y: [-12, 22] }, //{ x: 3, y: -12 },
  { x: '04-04 周四', y: [-16, 24] }, //{ x: 4, y: -16 },
  { x: '04-05 周五', y: [-10, 14] }, //{ x: 5, y: -10 },
  { x: '04-06 周六', y: [-9, 14] },
  { x: '04-07 周日', y: [-12, 15] },
  { x: '04-08 周一', y: [-14, 11] },
  { x: '04-09 周二', y: [-15, 10] },
  { x: '04-10 周三', y: [-14, 15] },
  { x: '04-11 周四', y: [-13, 16] },
  { x: '04-12 周五', y: [-8, 4] },
  { x: '04-13 周六', y: [-5, 6] },
  { x: '04-14 周日', y: [-2, 7] },
  { x: '04-15 周一', y: [-7, 10] },
  { x: '04-16 周二', y: [-8, 12] },
  { x: '04-17 周三', y: [-12, 15] },
].map(d => ({...d, type: d.y > 0 ? '1' : '0'}));

const data = rawData.slice(0 , 5);

const defaultColorSet = {
  primary: '#498306',
  highlightText: '#9B9B9B',
  secondary: '#7ED321',
  border: '#6BC00F',
  text: {
    default: '#9B9B9B',
    highlight: '#666',
    key: '#417505',
    value: '#9B9B9B',
  },
  meta: {
    title: '#9B9B9B',
    value: '#417505',
  },
  guide: 'rgba(0, 0, 0, .1)',
  grid: 'rgba(255, 255, 255, .5)',
  xAxis: '#B3B3B3',
  yAxis: '#B3B3B3',
}

const DarkColorSet = {
  primary: '#B8E986',
  secondary: '#DDFFB8',
  border: '#FFFFFF',
  background: '#7EC855',
  highlightText: '#FFFFFF',
  text: {
    default: 'rgba(255, 255, 255, .6)',
    highlight: '#FFF',
    key: '#FFF',
    value: 'rgba(255, 255, 255, .6)',
  },
  meta: {
    title: 'rgba(255, 255, 255, .6)',
    value: '#FFFFFF',
  },
  guide: 'rgba(255, 255, 255, .5)',
  grid: 'rgba(0, 0, 0, .1)',
  xAxis: '#FFFFFF',
  yAxis: '#FFFFFF',
}

const App = React.createClass({
  getInitialState() {
    return {
      dark: true,
    };
  },
  getGrid() {
    const { dark } = this.state;
    if (dark) {
      return 'rgba(255, 255, 255, .5)';
    }
    return 'rgba(0, 0, 0, .1)';
  },
  render() {
    const { dark } = this.state;
    const colorSet = dark ? DarkColorSet : defaultColorSet; 
    return <div style={{ width: 1208, margin: '0 auto'}}>
      <div>
        <Checkbox checked={this.state.dark} onChange={ev => this.setState({ dark: ev.target.checked })}/> DARK STYLE
      </div>
      <div className="row">
        <DeerCard size="mini" title="最近一周价格" colorSet={colorSet}>
          <Charts.Interval data={data} xAxis='x' yAxis='y'/>
        </DeerCard>

        <DeerCard size="very-small" title="最近一周价格" colorSet={colorSet}>
          <Charts.Interval data={data} xAxis='x' yAxis='y' />
        </DeerCard>

        <DeerCard size="small" title="最近一周价格"  colorSet={colorSet}>
          <Charts.Interval data={data} xAxis='x' yAxis='y'/>
        </DeerCard>

        <DeerCard size="quarter" title="最近一周价格" colorSet={colorSet}>
          <Charts.Interval data={data} xAxis='x' yAxis='y' />
        </DeerCard>

        <DeerCard size="quarter" title="最近一周价格" colorSet={colorSet}>
          <Charts.Interval data={data} xAxis='x' yAxis='y' grid={true} />
        </DeerCard>
      </div>
      
      <div className="row">
        <DeerCard size="third" colorSet={colorSet}>
          <Meta>
            <Meta.Item title="Average">24.6%</Meta.Item>
          </Meta>
          <Charts.Interval data={data} xAxis='x' yAxis='y' grid={this.getGrid()}  />
        </DeerCard>

        <DeerCard size="third" colorSet={colorSet}>
          <Meta>
            <Meta.Item title="Average">24.6%</Meta.Item>
            <Meta.Item title="Average">103 / DAY</Meta.Item>
          </Meta>
          <Charts.Interval data={data} xAxis='x' yAxis='y' grid={this.getGrid()}   />
        </DeerCard>

        <DeerCard size="third" colorSet={colorSet}>
          <Meta>
            <Meta.Item type="large" title="Type something">3200 <span className="grow"> 17.18 </span></Meta.Item>
          </Meta>
          <Charts.Interval data={data} xAxis='x' yAxis='y' grid={this.getGrid()}  />
        </DeerCard>
      </div>

      <div className="row">
        <DeerCard size="half" title={<Meta type="vertical">
            <Meta.Item title="最近一周价格" />
            <Meta.Item title="Type">24.6%</Meta.Item>
            <Meta.Item title="Type">24.6%</Meta.Item>
            <Meta.Item title="Type">24.6%</Meta.Item>
          </Meta>} colorSet={colorSet}>
          <Charts.Interval data={data} xAxis='x' yAxis='y' grid={this.getGrid()} />
        </DeerCard>
        <DeerCard size="half" title={<Meta type="vertical">
            <Meta.Item title="最近一周价格" />
            <Meta.Item title="Type">24.6% <span className="grow"> 17.18 </span></Meta.Item>
            <Meta.Item title="Type">24.6% <span className="grow"> 17.18 </span></Meta.Item>
            <Meta.Item title="Type">24.6% <span className="grow"> 17.18 </span></Meta.Item>
          </Meta>} colorSet={colorSet}>
          <Charts.Interval data={data} xAxis='x' yAxis='y' grid={this.getGrid()} />
        </DeerCard>
      </div>

      <div className="row">
        <DeerCard size="large" title={<Meta type="vertical">
            <Meta.Item title="最近一周价格" />
            <Meta.Item title="Type">24.6%</Meta.Item>
            <Meta.Item title="Type">24.6%</Meta.Item>
            <Meta.Item title="Type">24.6%</Meta.Item>
          </Meta>} colorSet={colorSet}>
          <Charts.Interval data={rawData.slice(0, 9)} xAxis='x' yAxis='y' grid={this.getGrid()}  />
        </DeerCard>
      </div>

      <div className="row">
        <DeerCard size="full" title={<Meta type="vertical">
            <Meta.Item title="最近一周价格" />
            <Meta.Item title="Type">24.6%</Meta.Item>
            <Meta.Item title="Type">24.6%</Meta.Item>
            <Meta.Item title="Type">24.6%</Meta.Item>
          </Meta>} colorSet={colorSet}>
          <Charts.Interval data={rawData} xAxis='x' yAxis='y' grid={this.getGrid()} />
        </DeerCard>
      </div>
    </div>
  }
})

ReactDOM.render(<App />, document.getElementById('__react-content'));
