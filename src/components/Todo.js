import React from 'react';

function Todo({ text, id, todo, todos, setTodos }) {
	const deleteTodo = () => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const completeTodo = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !todo.completed };
				}
				return item;
			}),
		);
	};

	return (
		<>
			<li className={todo.completed ? 'completed' : ''}>
				<div className="view">
					<input className="toggle" type="checkbox" onClick={completeTodo} />
					<label>{text}</label>
					<button className="destroy" onClick={() => deleteTodo(id)} />
				</div>
			</li>
		</>
	);
}

export default Todo;
