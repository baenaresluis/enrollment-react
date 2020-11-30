import React, {useState} from 'react'

const Todos = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
  
    const handlerAddTodo = () => {
      const todosList = [...todos];
      todosList.push(todo);
      setTodos(todosList)
    };
  
    return (
      <div style={{width: '100%', textAlign: 'center'}}>
        <h1>Demo Form</h1>
        <div>
          <input 
            type='text' 
            placeholder='Add Todo' 
            onChange={(e) => setTodo(e.target.value)}
          />
          <button primary type='button' onClick={handlerAddTodo}>
            Add todo
          </button>
        </div>
        <br/>
        <div style={{witdth : '100%', textAlign: 'center' }}>
          <h2> Todo List </h2>
          <ul>
            {todos && todos.map((item) => <li key={todo}>{item}</li>)}
          </ul>
        </div>
      </div>
    );
};

export default Todos
