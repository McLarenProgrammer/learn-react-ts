import React from "react";
import type { IUser } from "../types/types";

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

function UserItem({ user, onClick }: UserItemProps) {
    return (
        <>
            <div onClick={() => onClick(user)} style={{ padding: 15, border: '1px solid blue' }}>
                {user.id}, {user.name} проживает в городе {user.address.city} на улице {user.address.street}
            </div>
        </>
    )
}

export default UserItem