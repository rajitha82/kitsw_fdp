import React, { useState } from 'react';
import { addTask } from '../services/api';

export default function TaskForm({ userId, refreshTasks }) {
  const [task, setTask] = useState({ title: '', priority: 'Medium', deadline: '', estimatedTime: 60 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask({ ...task, userId });
    refreshTasks();
    setTask({ title: '', priority: 'Medium', deadline: '', estimatedTime: 60 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} placeholder="Task Title" />
      <input type="datetime-local" value={task.deadline} onChange={(e) => setTask({ ...task, deadline: e.target.value })} />
      <select value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input type="number" value={task.estimatedTime} onChange={(e) => setTask({ ...task, estimatedTime: parseInt(e.target.value) })} />
      <button type="submit">Add Task</button>
    </form>
  );
}
