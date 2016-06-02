var expect = require('expect');
var actions = require('actions');

describe('actions', () => {
  it('should generate search text action', () => {
    var action = {
      type : 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate addToDo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'walk dog'
    };
    var res = actions.addToDo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggleToDo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    var res = actions.toggleToDo(action.id);

    expect(res).toEqual(action);
  });
});
