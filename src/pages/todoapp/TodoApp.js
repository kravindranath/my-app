import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import _get from 'lodash/get'
import _cloneDeep from 'lodash/cloneDeep'
import _map from 'lodash/map'
import _find from 'lodash/find'
import _remove from 'lodash/remove'
import _filter from 'lodash/filter'
import Todos from './Todos'

import '../../css/main.css';
import './todo.css';

class TodoApp extends React.Component {

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
			name: name,
			status: false
		}
	}

	componentDidMount() {
		var todoStr = localStorage.getItem('todo') || JSON.stringify([]);

		if (todoStr) {
			var todo = JSON.parse(todoStr);
			this.setState({ todos: todo });
		} else {
			localStorage.setItem('todo', JSON.stringify([]));
		}
	}

	updateLocalStorage(todos) {
		try {
			if (todos) {
				this.setState({ todos: todos });
				localStorage.setItem('todo', JSON.stringify(this.state.todos));
			}
		}
		catch (e) {
			console.log(e.message);
		}
	}

	updateTodosState(id) {
		var todos = this.state.todos || [];

		var newTodos = _map(todos, function (item) {
			var itemStatus = item.status,
				itemId     = item.id;

			if (id === itemId) {
				item.status = !(itemStatus)
			} else {
				item.status = !!(itemStatus);
			}
			return item;
		});

		this.updateLocalStorage(newTodos);
	}

	stripHtml(str){
		return str.replace(/(<([^>]+)>)/gi, "");
	}

	onClickClear() {
		var todos = this.state.todos || [];

		var newTodos = _remove(todos, function (e) { return e.status === false; });

		this.updateLocalStorage(newTodos);
	}

	onClickChkBox(el) {
		var inputVal = _get(el, 'currentTarget.value', '');
		this.updateTodosState(inputVal);
	}

	avoidDuplicate(inputVal, currTodos){
		var duplicateItem = _find(currTodos, { name : inputVal });
		if(duplicateItem) {
			return false;
		}
		return true;
	}

	onClickAdd() {
		var inputVal = _get(this, 'textInput.current.value', ''),
			currTodos = _cloneDeep(this.state.todos),
			todo = inputVal && this.createTodo(this.stripHtml(inputVal)),
			shouldUpdate = this.avoidDuplicate(inputVal, currTodos)

		if (todo && shouldUpdate) {
			currTodos.push(todo);
			this.updateLocalStorage(currTodos);
			this.textInput.current.value = '';
		}
	}

	render() {
		var todoState = this.state || {},
			totalTodos = todoState.todos || [],
			completedTodos = _filter(todoState.todos, (e) => { return e.status === false; }) || [],
			showLabel = `${completedTodos.length || 0}/${totalTodos.length || 0}`;

		return (
			<div className="todo-div">
				<h1>To do list</h1>
				<input ref={this.textInput} className="inputField" placeholder="Add something to-do" />
				<button className="defButton" onClick={this.onClickAdd}>Add</button>
				<button className="defButton" onClick={this.onClickClear}>Clear</button>
				<Todos todos={this.state.todos} onClickChkBox={this.onClickChkBox.bind(this)} />
				<p>Showing {showLabel} to-do's</p>
			</div>
		)

	};
}

export default TodoApp;
