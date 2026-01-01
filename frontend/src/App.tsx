import './App.css'
import { TodoInput } from './features/todo/components/TodoInput';
import { TodoList } from './features/todo/components/TodoList';
import { useTodos } from './features/todo/hooks/useTodos';

function App() {
    const { todos, addTodo, toggleTodo, deleteTodo, changeTodo } = useTodos();
    return (
        <>
            <section>
                <TodoInput onAdd={addTodo} />
            </section>
            <section>
                <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onChange={changeTodo}/>
            </section>
        </>
    )
}

export default App;
