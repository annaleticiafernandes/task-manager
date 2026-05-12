const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3001

// Middlewares
app.use(cors())
app.use(express.json())

// Banco de dados em memória (por enquanto)
let tasks = [
  { id: 1, title: 'Estudar React', completed: false },
  { id: 2, title: 'Fazer o projeto', completed: false },
]
let nextId = 3

// Rotas
// GET /tasks — lista todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks)
})

// POST /tasks — cria uma nova tarefa
app.post('/tasks', (req, res) => {
  const { title } = req.body
  const newTask = { id: nextId++, title, completed: false }
  tasks.push(newTask)
  res.status(201).json(newTask)
})

// PUT /tasks/:id — atualiza uma tarefa (marcar como concluída)
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const task = tasks.find(t => t.id === id)
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' })
  task.completed = !task.completed
  res.json(task)
})

// DELETE /tasks/:id — deleta uma tarefa
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id)
  tasks = tasks.filter(t => t.id !== id)
  res.status(204).send()
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})