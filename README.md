# 📝 Task Manager

Aplicação fullstack de gerenciamento de tarefas, desenvolvida com React no front-end e Node.js + Express no back-end.

## 🚀 Tecnologias utilizadas

**Front-end**
- React (Vite)
- Axios
- CSS3

**Back-end**
- Node.js
- Express
- API REST

## ✨ Funcionalidades

- ✅ Listar tarefas
- ✅ Criar nova tarefa
- ✅ Marcar tarefa como concluída
- ✅ Deletar tarefa

## 🏗️ Arquitetura
task-manager/
├── backend/
│   └── server.js       # API REST com Express
└── frontend/
└── src/
└── App.jsx     # Interface React

## ▶️ Como rodar o projeto

### Pré-requisitos
- Node.js v18+
- Git

### Back-end
```bash
cd backend
npm install
node server.js
# Servidor rodando em http://localhost:3001
```

### Front-end
```bash
cd frontend
npm install
npm run dev
# Aplicação em http://localhost:5173
```

## 📡 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /tasks | Lista todas as tarefas |
| POST | /tasks | Cria uma nova tarefa |
| PUT | /tasks/:id | Alterna status da tarefa |
| DELETE | /tasks/:id | Remove uma tarefa |
