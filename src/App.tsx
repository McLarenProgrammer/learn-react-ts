import { useEffect, useState } from 'react'
import './App.css'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import type { ITodo, IUser } from './types/types'
import axios from 'axios'
import List from './components/List'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'

function App() {
    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])
    
    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

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
            <Card onClick={() => console.log('click')} variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Кнопочка</button>
                <p>Текст внутри карточки</p>
            </Card>
            <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>} />
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>} />
        </>
    )
}

export default App
