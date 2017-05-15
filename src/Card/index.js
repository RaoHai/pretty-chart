import React, { Component } from 'react';
import CardBase from './Card.base';

const testData = [];
for (let i = 0; i < 10; i++) {
  const y = Math.round(Math.random() * 10);
  testData.push({
    x: i * 10,
    y,
    type: y > 5 ? 1 : 0, 
  });
}

class DefaultCard extends Component {
  state = {  }
  render() {
    const { props } = this;
    const id = `default-chart-container-${Math.random()}`;
    return <CardBase {...props} data={testData} id={id}>
      {props.children ? props.children : <div id={id} /> }
    </CardBase>
  }
}

export default DefaultCard;