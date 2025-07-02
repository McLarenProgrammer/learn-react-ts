import React from "react";
import type { ITodo } from "../types/types";

interface TodoItemProps {
    todo: ITodo
}

function TodoItem({todo}: TodoItemProps) {
    return (
        <>
            <div>
                <input type="checkbox" checked={todo.completed} />
                {todo.id}. {todo.title} 
            </div>
        </>
    )
}

export default TodoItem