import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const editTask = (index) => {
    setInputValue(tasks[index]);
    setEditingIndex(index);
  };

  const updateTask = () => {
    if (inputValue.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = inputValue;
      setTasks(updatedTasks);
      setInputValue('');
      setEditingIndex(-1);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {editingIndex === -1 ? (
          <button onClick={addTask}>Add</button>
        ) : (
          <button onClick={updateTask}>Update</button>
        )}
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
