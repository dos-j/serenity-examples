import serenity from 'serenitydi';

serenity.registerState(() => {
  return {
    items: []
  };
}, 'TodoModel', []);

serenity.register((model) => {

  return function(item) {
    model.setState({
      items:  [
        ...model.items,
        item
      ]
    });
  }
}, 'AddTodoItemAction', ['TodoModel']);

serenity.register((model) => {

  return function(item) {
    item.complete = true;
    
    model.setState({
      items: [
        ...model.items.map(existing => existing === item ? item : existing)
      ]
    });
  }
}, 'CompleteTodoItemAction', ['TodoModel']);

serenity.register((model) => {

  return function(item) {

    model.setState({
      items: [
        ...model.items.filter(existing => existing !== item)
      ]
    });
  }
}, 'DeleteTodoItemAction', ['TodoModel']);
