var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid = require('node-uuid');
var ToDoAPI = require('ToDoAPI');
var moment = require('moment');

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: ToDoAPI.getTodos()
    };
  },
  componentDidUpdate: function(){
    ToDoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(text)
  {
    this.setState({
      todos: [
          ...this.state.todos,
          {
            id: uuid(),
            text: text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
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
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = ToDoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">ToDo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <ToDoSearch onSearch={this.handleSearch}/>
              <ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddToDo onAddToDo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ToDoApp;
