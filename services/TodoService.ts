import { TodoItem } from '../interfaces/TodoItem';
import { TodoError } from '../exceptions/TodoError';

export class TodoService {
    private todos: TodoItem[] = [];
    private nextId = 1;

    public addTodo(task: string, dueDate: Date): void {
        if (!task.trim()) {
            throw new TodoError('Task cannot be empty');
        }

        const todo: TodoItem = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate
        };

        this.todos.push(todo);
    }

    public completeTodo(id: number): void {
        const todo = this.findTodoById(id);

        if (todo.completed) {
            throw new TodoError('Todo is already completed');
        }

        todo.completed = true;
    }

    public removeTodo(id: number): void {
        const initialLength = this.todos.length;

        this.todos = this.todos.filter(todo => todo.id !== id);

        if (this.todos.length === initialLength) {
            throw new TodoError(`Todo with ID ${id} not found`);
        }
    }

    public listTodos(): TodoItem[] {
        return [...this.todos];
    }

    public filterTodosByStatus(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    public updateTodo(id: number, updatedTask: string): void {
        if (!updatedTask.trim()) {
            throw new TodoError('Updated task cannot be empty');
        }

        const todo = this.findTodoById(id);

        todo.task = updatedTask;
    }

    public clearCompletedTodos(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
    }

    private findTodoById(id: number): TodoItem {
        const todo = this.todos.find(todo => todo.id === id);

        if (!todo) {
            throw new TodoError(`Todo with ID ${id} not found`);
        }

        return todo;
    }
}