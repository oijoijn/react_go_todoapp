import { useCallback, useState } from "react"
import type { Todo } from "../types"

export const useTodos = () => {
    const [todos, setTodo] = useState<Todo[]>([]);

    // action addTodo
    const addTodo = useCallback((text: string) => {
        const newTodo = {
            id: crypto.randomUUID(),
            text: text.trim(),
            isCompleted: false,
            createdAt: Date.now(),
        }
        setTodo((prev) => [newTodo, ...prev])
    }, []);

    // action toggleTodo chackbox
    const toggleTodo = useCallback((id: string) => {
        setTodo((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        )
    }, []);

    // action deleteTodo
    const deleteTodo = useCallback((id: string) => {
        setTodo((prev) => prev.filter((todo) => todo.id !== id));
    }, []);

    // action changetodo text
    const changeTodo = useCallback((id: string, text: string) => {
        if (!text.trim()) return;
        setTodo((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, text: text }
                    : todo

            ))
    }, [])

    return { todos, addTodo, toggleTodo, deleteTodo, changeTodo };
}

