import React, { useEffect, useState } from "react";
import type { IUser } from "../types/types";
import axios from "axios";
import { useParams } from "react-router-dom";

interface UserItemPageParams {
    [index: string]: string
    id: string
}

function UserItemPage() {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    
    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <div>
                <button>Вернуться</button>
                <h1>Страница пользователя {user?.name}</h1>
                <div>
                    {user?.email}
                </div>
                <div>
                    {user?.address.city} {user?.address.street} {user?.address.zipcode}
                </div>
            </div>
        </>
    )
}

export default UserItemPage