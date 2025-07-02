import React, { useEffect, useState } from "react";
import type { ITodo } from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

interface TodosPageProps {

}

function TodosPage({}: TodosPageProps) {
    const [todos, setTodos] = useState<ITodo[]>([])
    
    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>} />
        </>
    )
}

export default TodosPage