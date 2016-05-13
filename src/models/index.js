import serenity from 'serenitydi';
console.log(serenity);

serenity.registerState(() => {
  return {
    items: ['Hello, World']
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
}, 'SampleAction', ['TodoModel']);

serenity.register((model) => {

  return function(idx) {
    model.items = model.items.filter((item, index) => index !== idx);
  }
}, 'DeleteTodoItemAction', ['TodoModel']);
