import { useState } from 'react';
import TodoHijo from './TodoHijo';
import '../components/Todo.css';
export default function ToDo() {
	const [title, setTitle] = useState('');
	const [todos, setTodos] = useState([]);

	function handleChange(event) {
		const value = event.target.value;
		setTitle(value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		const newTodo = {
			id: crypto.randomUUID(),
			title,
			completed: false,
		};
		const temp = [...todos];
		temp.unshift(newTodo);
		setTodos(temp);

		setTitle('');
	}
	function handleUpdate(id, value) {
		const temp = [...todos];
		const item = temp.find(item => item.id === id);
		item.title = value;
		setTitle('');
	}
	function handleDelete(id) {
		const temp = todos.filter(item => item.id !== id);
		setTodos(temp);
	}

	return (
		<div className='todoContainer'>
			<form className='todoCreateForm' onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					className='todoInput'
					value={title}
					placeholder='Escribir'
				/>
				<input
					onClick={handleSubmit}
					type='submit'
					value='Create todo'
					className='buttonCreate'
				/>
			</form>
			<div className='todosContainer'>
				{todos.map(item => (
					<TodoHijo
						key={item.id}
						item={item}
						onUpDate={handleUpdate}
						onDelete={handleDelete}
					/>
				))}
			</div>
		</div>
	);
}
