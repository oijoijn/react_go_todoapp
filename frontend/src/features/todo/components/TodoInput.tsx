import { memo, useState, type FormEvent } from "react";

export type Props = {
    onAdd: (text: string) => void;
}

export const TodoInput = memo(({ onAdd }: Props) => {
    const [text, setText] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim()) return;

        onAdd(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit" disabled={!text.trim()} >add</button>
        </form>
    )
})


TodoInput.displayName = 'TodoInput';
