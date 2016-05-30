var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'go to the gym',
          completed: true
        },
        {
          id: uuid(),
          text: 'play vidya',
          completed: false
        }
      ]
    };
  },
  handleAddTodo: function(text)
  {
    this.setState({
      todos: [
          ...this.state.todos,
          {
            id: uuid(),
            text: text,
            completed: false
          }
      ]
    });
  },
  handleToggle: function(id)
  {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id)
      {
        todo.completed = !todo.completed; // set to opposite
      }
      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText)
  {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function()
  {
    var {todos} = this.state;

    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList todos={todos} onToggle={this.handleToggle}/>
        <AddToDo onAddToDo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
