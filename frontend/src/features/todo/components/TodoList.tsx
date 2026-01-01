import { memo } from "react";
import type { Todo } from "../types"
import { TodoItem } from "./TodoItem";

export type Props = {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onChange: (id: string, text: string) => void;
}

export const TodoList = memo(({ todos, onToggle, onDelete, onChange }: Props) => {
    if (!todos.length) {
        <p>todoがありません</p>
    } else {
        <p>がんばってください</p>
    }

    return (
        <div>
            {todos.map((todo) =>
                < TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onChange={onChange}
                />
            )}
        </div>
    )
});


TodoList.displayName = 'TodoList';
