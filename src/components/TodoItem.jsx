import React, { Component } from 'react';

export default class TodoItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      item,
      ref,
      onDelete,
      onMarkComplete
    } = this.props;
    
    const itemStyle = {};
    if (item.complete) {
      itemStyle.textDecoration = 'line-through';
    }

    return (
      <li>
        <span style={itemStyle}> {item.value} </span>
        <button onClick={onMarkComplete}>DONE</button>
        <button onClick={onDelete}>X</button>
      </li>
    );
  }
}
