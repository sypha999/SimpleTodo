# Todo List Application

A simple modular Todo List application built with TypeScript.

This project demonstrates:
- TypeScript interfaces and classes
- SOLID principles
- Error handling
- Modular architecture
- Object-oriented programming concepts

---

# Features

- Add todo items
- Complete todo items
- Remove todo items
- Update todo tasks
- List all todos
- Filter todos by completion status
- Clear completed todos
- Due date support

---

# Project Structure

```txt
src/
│
├── interfaces/
│   └── TodoItem.ts
│
├── exceptions/
│   └── TodoError.ts
│
├── services/
│   └── TodoService.ts
│
├── models/
│   └── TodoList.ts
│
└── index.ts
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/sypha999/SimpleTodo.git
```

## Navigate into the project folder

```bash
cd SimpleTodo
```

## Install dependencies

```bash
npm install
```

---

# Running the Project

## Compile TypeScript

```bash
npx tsc
```

## Run the application

```bash
node dist/index.js
```

Or run directly with ts-node:

```bash
npx ts-node src/index.ts
```

---

# TodoItem Interface

```ts
export interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}
```

---

# Available Methods

| Method | Description |
|---|---|
| `addTodo(task, dueDate)` | Adds a new todo |
| `completeTodo(id)` | Marks a todo as completed |
| `removeTodo(id)` | Removes a todo |
| `listTodos()` | Returns all todos |
| `filterTodosByStatus(status)` | Filters todos by completion status |
| `updateTodo(id, task)` | Updates a todo task |
| `clearCompletedTodos()` | Removes all completed todos |

---

# Example Usage

```ts
import { TodoService } from './services/TodoService';

const todoService = new TodoService();

todoService.addTodo(
    'Learn TypeScript',
    new Date('2026-06-01')
);

todoService.completeTodo(1);

console.log(todoService.listTodos());
```

---

# Error Handling

The application uses a custom `TodoError` class for handling errors such as:
- Empty task input
- Todo not found
- Completing an already completed todo

Example:

```ts
try {
    todoService.completeTodo(99);
} catch (error) {
    console.error(error);
}
```

---

# Technologies Used

- TypeScript
- Node.js

---

