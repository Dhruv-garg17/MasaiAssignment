import React, { useState, useEffect } from 'react';
import './App.css';
const databaseUrl = 'https://masai-87b5d-default-rtdb.asia-southeast1.firebasedatabase.app';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskStatus, setTaskStatus] = useState('not-started');
  const [completedCount, setCompletedCount] = useState(0);
  const [ongoingCount, setOngoingCount] = useState(0);
  const [notStartedCount, setNotStartedCount] = useState(0);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${databaseUrl}/tasks.json`);
        const data = await response.json();
        if (data) {
          const tasksArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setTasks(tasksArray);

         
          setCompletedCount(tasksArray.filter(task => task.status === 'completed').length);
          setOngoingCount(tasksArray.filter(task => task.status === 'ongoing').length);
          setNotStartedCount(tasksArray.filter(task => task.status === 'not-started').length);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);  


  const addTask = async () => {
    if (!newTask) return;

    const taskId = new Date().getTime().toString(); 
    const newTaskData = {
      name: newTask,
      status: taskStatus,
    };

    try {
      await fetch(`${databaseUrl}/tasks/${taskId}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTaskData),
      });

      setNewTask('');
      setTaskStatus('not-started');
      fetchTasks();  // Fetch updated tasks after adding
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };


  const editTask = async (id, newName) => {
    if (!newName) return;

    const taskRef = `${databaseUrl}/tasks/${id}.json`;
    const updatedTask = {
      name: newName,
      status: tasks.find(task => task.id === id).status,  // Keep the original status
    };

    try {
      await fetch(taskRef, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      fetchTasks();  // Fetch updated tasks after editing
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };


  const deleteTask = async (id) => {
    try {
      await fetch(`${databaseUrl}/tasks/${id}.json`, {
        method: 'DELETE',
      });
      fetchTasks();  // Fetch updated tasks after deleting
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <nav>
        <div>
          <h2>Task Manager</h2>
          <div>
            <span>Completed: {completedCount}</span>
            <span>Ongoing: {ongoingCount}</span>
            <span>Not Started: {notStartedCount}</span>
          </div>
        </div>
      </nav>

      <div className="task-cards">
        <div className="task-card">
          <h3>Completed</h3>
          <ul>
            {tasks.filter(task => task.status === 'completed').map(task => (
              <li key={task.id}>
                {task.name}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <button onClick={() => editTask(task.id, prompt("Edit Task:", task.name))}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="task-card">
          <h3>Ongoing</h3>
          <ul>
            {tasks.filter(task => task.status === 'ongoing').map(task => (
              <li key={task.id}>
                {task.name}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <button onClick={() => editTask(task.id, prompt("Edit Task:", task.name))}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="task-card">
          <h3>Not Started</h3>
          <ul>
            {tasks.filter(task => task.status === 'not-started').map(task => (
              <li key={task.id}>
                {task.name}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <button onClick={() => editTask(task.id, prompt("Edit Task:", task.name))}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3>Add New Task</h3>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Task name"
        />
        <select
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
        >
          <option value="not-started">Not Started</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default App;
