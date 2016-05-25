import React from 'react';
import { TodoItem } from './index';


class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      model
    } = this.props;

    return (
      <ul>
        {
         model.items.map((item, idx) => {
           return <TodoItem key={'todoitem-' + idx} item={item} ref={idx} onMarkComplete={this.onMarkComplete.bind(this, item)} onDelete={this.onDelete.bind(this, item)} />;       
          })
        }
      </ul>
    );
  }

  onDelete(idx) {
    this.props.deleteAction(idx);
  }

  onMarkComplete(item) {
    this.props.markCompleteAction(item);
  }
}

export default TodoList;

