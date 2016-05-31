var React = require('react');

var AddToDo = React.createClass({
  handleSubmit: function(e)
  {
    e.preventDefault();

    var todo = this.refs.todoText.value;

    if(todo.length > 0)
    {
      this.refs.todoText.value = '';
      this.props.onAddToDo(todo);
    }
    else{
      this.refs.todoText.focus();
    }
  },
  render: function()
  {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do ?"/>
          <button className="button expanded">Add ToDo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddToDo;
