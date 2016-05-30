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
          text: 'walk the dog'
        },
        {
          id: uuid(),
          text: 'clean the yard'
        },
        {
          id: uuid(),
          text: 'go to the gym'
        },
        {
          id: uuid(),
          text: 'play vidya'
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
            text: text
          }
      ]
    });
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
        <ToDoList todos={todos}/>
        <AddToDo onAddToDo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
