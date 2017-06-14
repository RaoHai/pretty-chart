import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './index.less';

function getConfig(uuid) {
  const row = JSON.parse(localStorage.getItem('row'));
  return row ? row[uuid] : {};
}

function updateConfig(uuid, config) {
  const row = localStorage.getItem('row');
  const lastConfig = getConfig(uuid);
  const rowData = JSON.stringify({
    ...row,
    [`${uuid}`]: { ...lastConfig, ...config },
  });
  localStorage.setItem('row', rowData);
}

@DragDropContext(HTML5Backend)
export default class Row extends Component {
  static childContextTypes = {
    height: PropTypes.number,
  }

  getChildContext() {
    return {
      height: this.props.height,
    };
  }

  static defaultProps = {
    height: 250,
  };

  constructor(props) {
    super(props);
    this.state = {
      layout: props.editable ? this.getLayout(props) : (props.ratio ? 2 : 1),
    };
  }

  getLayout = (props) => {
    const uuid = props.id;
    if (!uuid) {
      console.warn('Editable <Row /> component must have uniq `key` or `id` props, in order to save its configurations');
      return {};
    }

    return getConfig(uuid).layout;
  }

  renderChildren() {
    const { layout } = this.state;
    const { children, ratio } = this.props;

    /**
     * |------|------|
     * | card | card |
     * |------|------|
     */
    if (layout === 1 || React.Children.count <= 2) {
      return children;
    }

    /**
     * |------|------|
     * |      | card |
     * | card |------|
     * |      | card |
     * |------|------|
     */
    if (layout === 2) {
      const ratiosArr = ratio.split(':');
      const rowChildren = React.Children.toArray(children);
      const resChildren = [];

      for (let i = 0; i < ratiosArr.length; i += 1) {
        let child;
        const style = {
          flex: Number(ratiosArr[i]),
        };

        if (i === ratiosArr.length - 1) {
          child = rowChildren.slice(i, rowChildren.length);
        } else {
          child = rowChildren[i];
        }

        resChildren.push(<div className={`partical partical-${ratiosArr[i]}`} key={i} style={style}>
          {child}
        </div>);
      }

      return resChildren;
    }

    return children;
  }

  changeLayout = (layout) => {
    this.setState({
      layout,
    }, () => {
      updateConfig(this.props.id, { layout });
    });
  }

  render() {
    const { layout } = this.state;
    const { id, editable, vertical } = this.props;
    return (
      <div className={`row ${editable ? 'editable' : ''} ${vertical ? 'vertical' : ''}`} key={id}>
        {this.renderChildren()}
        {editable ? <div className="controllers">
          <ul>
            {[1, 2, 3].map(index =>
                (<li className={`${layout === index ? 'active' : ''}`}>
                  <span onClick={() => this.changeLayout(index)} className={`iconfont icon-layout${index}`} />
                </li>)
            )}
            <li><span className="iconfont icon-shezhi" /></li>
            <li><span className="iconfont icon-shanchu" /></li>
          </ul>
        </div> : null}
      </div>
    );
  }
}
