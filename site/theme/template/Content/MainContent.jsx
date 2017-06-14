import React, { Component } from 'react';
import { Link } from 'bisheng/router';
import Demo from './Demo';
import './MainContent.less';

/* eslint no-extend-native:0 */
Array.prototype.sortBy = function (fieldOrCompare) {
  if (!fieldOrCompare) {
    return this;
  }
  if (typeof fieldOrCompare === 'string') {
    return this.sort((a, b) => a[fieldOrCompare] > b[fieldOrCompare]);
  }
  if (typeof fieldOrCompare === 'function') {
    return this.sort(fieldOrCompare);
  }
  return this;
};

function isSelected(filename, props) {
  const pathname = props.location.pathname;
  const matches = /^demo\/(\w+(\/.*)?)$/g.exec(pathname);
  if (!matches) {
    return false;
  }
  return matches[1] && matches[1] === filename.replace(/\/children/, '');
}

function getPathname(url) {
  const matches = /^site\/posts\/(\w+(\/.*)?)\/.*\.md/g.exec(url);
  if (matches) {
    return matches[1];
  }
  return '';
}

function getPickData(pick, props) {
  const url = getPathname(pick.meta.filename);
  return {
    name: url,
    order: pick.meta.order,
    title: pick.meta.title,
    fileName: `/demo/${url}`,
    selected: isSelected(url, props),
    children: [],
  };
}

function getModuleData(props) {
  const moduleData = props.picked.demos
  .filter(pick => !!pick.topLevel)
  .map(pick => getPickData(pick, props))
  .sort((a, b) => a.order - b.order);

  props.picked.demos
    .filter(pick => !pick.topLevel)
    .forEach((pick) => {
      if (pick.parent) {
        const index = moduleData.findIndex(d => d.name === pick.parent);
        if (index !== -1) {
          moduleData[index].children.push(getPickData(pick, props));
        }
      }
    });
  return moduleData;
}

class MainContent extends Component {
  state = { };
  getMenuChildren = (children) => {
    if (!Array.isArray(children) || children.length === 0) {
      return null;
    }
    return (<ul className="submenu">
      {children.sortBy('order').map(item => (<li
        key={item.fileName}
        className={item.selected ? 'selected' : ''}
      >
        <Link to={item.fileName.replace(/\/children/, '')}>{item.title}</Link>
      </li>))}
    </ul>);
  }
  getMenuItems = () => {
    const data = getModuleData(this.props);
    return data.map(item => (<li key={item.fileName} className={item.selected ? 'selected' : ''}>
      <Link to={item.fileName}>{item.title}</Link>
      {item.children ? this.getMenuChildren(item.children) : null}
    </li>));
  }
  render() {
    const { props } = this;
    const { location } = this.props;
    const demos = Object.keys(props.demos).map(key => props.demos[key]);
    demos.sort((a, b) => a.meta.order - b.meta.order);
    return (
      <div className="main-content-row">
        <aside>
          <ul>
            {this.getMenuItems()}
          </ul>
        </aside>
        <div className="demos">
          {demos.map(demoData => (<Demo
            {...demoData}
            key={demoData.meta.filename}
            utils={props.utils}
            location={location}
          />)
          )}
        </div>
      </div>
    );
  }
}

export default MainContent;
