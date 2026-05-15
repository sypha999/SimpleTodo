const { TodoService } = require('./services/TodoService');

const todoService = new TodoService();

try {
    todoService.addTodo(
        'Learn TypeScript',
        new Date('2026-06-01')
    );

    todoService.addTodo(
        'Build Todo App',
        new Date('2026-06-05')
    );

    todoService.completeTodo(1);

    todoService.updateTodo(2, 'Build Advanced Todo App');

    console.log('All Todos:');
    console.log(todoService.listTodos());

    console.log('Completed Todos:');
    console.log(todoService.filterTodosByStatus(true));

    todoService.clearCompletedTodos();

    console.log('After Clearing Completed Todos:');
    console.log(todoService.listTodos());

} catch (error) {
    console.error(error);
}