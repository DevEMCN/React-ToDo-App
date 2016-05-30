var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoSearch = require('ToDoSearch');

describe('ToDoSearch', () => {
  it('should exist', () => {
    expect(ToDoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'dog';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'dog');
  });

  it('should call onSearch with proper checked value', () => {
    var searchText = '';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
