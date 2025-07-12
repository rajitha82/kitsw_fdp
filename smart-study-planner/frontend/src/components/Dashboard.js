import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import SuggestionBox from './SuggestionBox';

export default function Dashboard({ userId }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await getTasks(userId);
    setTasks(response.data);
  };

  useEffect(() => {
    if (userId) {
      fetchTasks();
    }
  }, [userId]);

  return (
    <div>
      <h2>📅 Your Study Dashboard</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.priority} - {task.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>

      <SuggestionBox userId={userId} />
    </div>
  );
}
