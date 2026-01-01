import { memo, useState } from "react";
import type { KeyboardEvent } from "react";
import type { Todo } from "../types";

export type Props = {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onChange: (id: string, text: string) => void;
}

export const TodoItem = memo(({ todo, onToggle, onDelete, onChange }: Props) => {
    const [draft, setDraft] = useState(todo.text);
    const [prevText, setPrevText] = useState(todo.text);

    if (todo.text !== prevText) {
        setPrevText(todo.text); 
        setDraft(todo.text);   
    }

    const handleCommit = () => {
        const trimmed = draft.trim();
        if (trimmed && trimmed !== todo.text) {
            onChange(todo.id, trimmed);
        } else {
            setDraft(todo.text);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.currentTarget.blur();
        }
        if (e.key === 'Escape') {
            setDraft(todo.text);
            e.currentTarget.blur();
        }
    };

    return (
        <div>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => onToggle(todo.id)} />
            <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={handleCommit}
                onKeyDown={handleKeyDown}
                disabled={todo.isCompleted}
            />
            <button onClick={() => onDelete(todo.id)}>delete</button>
        </div>
    )
});

TodoItem.displayName = 'TodoItem';
