import React from 'react';
import './todo.css'
import { v4 as uuidv4 } from 'uuid';
import _get from 'lodash/get'
import _cloneDeep from 'lodash/cloneDeep'
import _map from 'lodash/map'
import _remove from 'lodash/remove'
import Todos from './Todos'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.onClickAdd = this.onClickAdd.bind(this);
    this.textInput = React.createRef();
    this.onclickChkBox = this.onClickChkBox.bind(this);
    this.updateTodosState = this.updateTodosState.bind(this);
    this.onClickClear = this.onClickClear.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
    this.state = {
      todos: []
    }
  }

  createTodo(name) {
    if (!name) return;

    return {
      id: uuidv4(),
      name : name,
      status: false
    }
  }

  componentDidMount() {
    var todoStr = localStorage.getItem('todo') || JSON.stringify([]);

    if(todoStr) {
      var todo = JSON.parse(todoStr);
      this.setState({ todos : todo });
    }else{
      localStorage.setItem('todo', JSON.stringify([]));
    }
  }

  updateLocalStorage(todos){
	  try {
		if(todos) {
			this.setState({ todos: todos });
			localStorage.setItem('todo', JSON.stringify(this.state.todos));
		}
	  }
	  catch(e){
		  console.log(e.message);
	  }
  }

  updateTodosState(id) {
    var todos = this.state.todos || [];

    var newTodos = _map(todos, function(e) {
      if(id === e.id){
        e.status = !(e.status)
      }else{
        e.status = !!(e.status);
      }
      return e;
    });

    this.updateLocalStorage(newTodos);
  }

  onClickClear(){
    var todos = this.state.todos || [];

    var newTodos = _remove(todos, function(e) { return e.status === false; });

    this.updateLocalStorage(newTodos);
  }

  onClickChkBox(el){
    var inputVal = _get(el, 'currentTarget.value', '');
    this.updateTodosState(inputVal);
  }

  onClickAdd(e) {
    var inputVal  = _get(this, 'textInput.current.value', ''),
        currTodos = _cloneDeep(this.state.todos),
        todo      = this.createTodo(inputVal);

    if(todo){
        currTodos.push(todo);
        this.updateLocalStorage(currTodos);
    }
  }

  render () {
    var todoState  = this.state || {},
     	totalTodos = todoState.todos.length || 0;
    return(
      <div className="todo-div">
        <h1>To do list</h1>
        <input ref={this.textInput} className="inputField" placeholder="Add something to-do" />
        <button onClick={this.onClickAdd}>Add</button>
        <button onClick={this.onClickClear}>Clear</button>
        <div>
          <Todos todos={this.state.todos} onClickChkBox={this.onClickChkBox.bind(this)} />
        </div>
        <p>Showing {totalTodos} to-do's</p>
      </div>
    )

  };
}

export default App;
