import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import Filters from './components/Filter';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filter, setFilter] = useState([]);

	return (
		<>
			<section className="todoapp">
				<Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
				<TodoList todos={todos} setTodos={setTodos} filter={filter} />
				<Filters
					todos={todos}
					setTodos={setTodos}
					completed={todos.completed}
					status={status}
					setStatus={setStatus}
					setFilter={setFilter}
				/>
			</section>
			<Footer />
		</>
	);
}

export default App;
