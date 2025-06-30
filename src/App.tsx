import { useState } from 'react'
import './App.css'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import type { IUser } from './types/types'

function App() {
    const [users, setUsers] = useState<IUser[]>([])
    

    return (
        <>
            <Card onClick={() => console.log('click')} variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Кнопочка</button>
                <p>Текст внутри карточки</p>
            </Card>
            <UserList users={users} />
        </>
    )
}

export default App
