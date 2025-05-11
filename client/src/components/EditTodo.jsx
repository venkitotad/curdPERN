import React from 'react'

function EditTodo() {
  return (
    <div>
 
      {/* <!-- Modal backdrop --> */}
<div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
  {/* <!-- Modal box --> */}
  <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
    <h2 class="text-xl font-semibold mb-4">Edit Todo</h2>

    {/* <!-- Edit Todo Input --> */}
    <label class="block mb-2 text-sm font-medium text-gray-700">Todo</label>
    <input
      type="text"
      class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Update your task"
      value="Buy groceries"
    />

    {/* <!-- Buttons --> */}
    <div class="mt-6 flex justify-end gap-4">
      <button class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
        Cancel
      </button>
      <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Update
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default EditTodo
