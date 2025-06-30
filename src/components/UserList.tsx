import React from "react";
import type { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
    users: IUser[]
}

function UserList({users} : UserListProps) {
    return (
        <>
            {users.map(user =>
                <UserItem key={user.id} user={user} />
            )}
        </>
    )
}

export default UserList