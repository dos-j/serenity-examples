import App from 'App';
import ReactInjector from 'serenity-react';
export TodoItem from './TodoItem';
import TodoListBase from 'TodoList';

export const App1 = ReactInjector(App, {
  'genericAction' : 'SampleAction'
}); 

export const TodoList = ReactInjector(TodoListBase, {
  'model' : 'TodoModel',
  'deleteAction': 'DeleteTodoItemAction'
});


