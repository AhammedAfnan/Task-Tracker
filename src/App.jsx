import React, { useState } from "react"

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="releative flex flex-col items-center justify-center p-8 min-h-screen">
      {/* <h1 className='text-3xl font-bold text-white mb-6'>Task Tracker</h1> */}
      <div className="shadow-xl rounded-sm p-6 max-w-xl w-full mb-6">
        <div className='flex items-center mb-6 p-4'>
          <div className="w-6 h-6 border rounded-full mr-3"></div>
          <input
            type="text"
            placeholder='Create a new todo...'
            className='flex-1 p-5 rounded outline-none placeholder:font-sans placeholder:text-lg'
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addTask();
              }
            }}
          />
        </div>

        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center rounded-lg group relative"
            >
              <div className="w-6 h-6 border rounded-full mr-3"></div>
              <span className="text-gray-800 font-medium flex-1 px-6 py-2">
                {task}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="absolute right-4 opacity-0 group-hover:opacity-100 text-red-500 hover-text-red-700 transition-opacity"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
