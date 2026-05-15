class TodoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'TodoError';
    }
}

module.exports = { TodoError };