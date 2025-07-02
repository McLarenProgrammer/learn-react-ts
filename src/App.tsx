import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UsersPage from './components/UsersPage'
import TodosPage from './components/TodosPage'
import { NavLink } from 'react-router-dom'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'

function App() {
    return (
        <>
            <BrowserRouter>
                <NavLink to='/users'>Пользователи</NavLink>
                <NavLink to='/todos'>Список дел</NavLink>
                <Routes>
                    <Route path={'/users'} element={<UsersPage />}></Route>
                    <Route path={'/todos'} element={<TodosPage />}></Route>
                    <Route path={'/users/:id'} element={<UserItemPage />}></Route>
                    <Route path={'/todos/:id'} element={<TodoItemPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
