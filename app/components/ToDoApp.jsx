var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'clean the yard'
        },
        {
          id: 3,
          text: 'go to the gym'
        },
        {
          id: 4,
          text: 'play vidya'
        }
      ]
    };
  },
  handleAddTodo: function(text)
  {
    alert('new todo: ' + text);
  },
  render: function()
  {
    var {todos} = this.state;

    return (
      <div>
        <ToDoList todos={todos}/>
        <AddToDo onAddToDo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
