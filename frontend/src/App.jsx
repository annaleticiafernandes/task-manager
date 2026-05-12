import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const API_URL = 'http://localhost:3001'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTitle, setNewTitle] = useState('')

  // Busca as tarefas do back-end quando o componente carrega
  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const response = await axios.get(`${API_URL}/tasks`)
    setTasks(response.data)
  }

  async function handleAddTask() {
    if (!newTitle.trim()) return
    await axios.post(`${API_URL}/tasks`, { title: newTitle })
    setNewTitle('')
    fetchTasks()
  }

  async function handleToggle(id) {
    await axios.put(`${API_URL}/tasks/${id}`)
    fetchTasks()
  }

  async function handleDelete(id) {
    await axios.delete(`${API_URL}/tasks/${id}`)
    fetchTasks()
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAddTask()
  }

  return (
    <div className="container">
      <h1>📝 Minhas Tarefas</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Nova tarefa..."
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 && (
          <p className="empty">Nenhuma tarefa ainda. Adicione uma!</p>
        )}
        {tasks.map(task => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
          >
            <div className="task-left">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span>{task.title}</span>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(task.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App