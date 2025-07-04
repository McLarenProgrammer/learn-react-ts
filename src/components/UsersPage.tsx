import React, { useEffect, useState } from "react";
import type { IUser } from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";

interface UsersPageProps {

}

function UsersPage({}: UsersPageProps) {
    const [users, setUsers] = useState<IUser[]>([])
    
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>} />
        </>
    )
}

export default UsersPage