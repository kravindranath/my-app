import React from 'react';
import './todo.css'
import { v4 as uuidv4 } from 'uuid';
import _get from 'lodash/get'
import _cloneDeep from 'lodash/cloneDeep'
import Todos from './Todos'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.onClickAdd = this.onClickAdd.bind(this);
    this.textInput = React.createRef();
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
    var todoStr = localStorage.getItem('todo') || '';

    if(todoStr === '' || null) {
      localStorage.setItem('todo', JSON.stringify([{}]));
    }
    var todo = JSON.parse(todoStr);
    this.setState({ todos : todo });
  }

  onClickAdd(e) {
    var inputVal = _get(this, 'textInput.current.value', '')
    var currTodos = _cloneDeep(this.state.todos);

    currTodos.push(this.createTodo(inputVal));
    this.setState({ todos: currTodos });

    localStorage.setItem('todo', JSON.stringify(currTodos));
  }

  render () {
    var todoState = this.state || {},
      totalTodos = todoState.todos.length || 0;
    return(
      <div className="todo-div">
        <h1>To do list</h1>
        <input ref={this.textInput} className="inputField" placeholder="Add something to-do" />
        <button onClick={this.onClickAdd}>Add</button>
        <div>
          <Todos todos={this.state.todos} />
        </div>
        <p>Showing {totalTodos} to-do's</p>
      </div>
    )

  };
}

export default App;
