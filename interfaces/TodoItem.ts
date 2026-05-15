interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}

module.exports = { TodoItem };