// ListTodo.jsx
import React, { useState, useEffect } from 'react';
import EditTodo from './EditTodo';
function ListTodo() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-4">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-medium text-gray-800">Current Tasks</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {todos.length === 0 ? (
            <div className="px-6 py-6 text-center text-gray-500">
              No tasks added yet
            </div>
          ) : (
            todos.map((todo) => (
              <div 
                key={todo.todo_id} 
                className="px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-700">{todo.description}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => deleteTodo(todo.todo_id)}
                    className="px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
                  >
                    Delete
                  </button>
                     <button
                    
                    className="px-3 py-1.5 text-sm bg-red-50 text-blue-600 rounded-md hover:bg-red-100 transition-colors"
                  >
                    <EditTodo/>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ListTodo;