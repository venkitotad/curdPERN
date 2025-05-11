import React from 'react'
import InputTodo from './InputTodo'
import ListTodo from './ListTodo'
function TodoContainer() {
  return (
      <div className="p-6 bg-slate-100 min-h-screen">
      <div className="max-w-xl bg-white p-6 rounded-xl shadow-md space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">📝 Todo List</h1>
        <InputTodo />
        <ListTodo />
      </div>
    </div>

  )
}

export default TodoContainer
