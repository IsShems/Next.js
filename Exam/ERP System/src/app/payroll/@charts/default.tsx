'use client'
import UserCard from '@/components/UserCard';
import { UserData } from '@/types/UserData';
import React, { useEffect, useState } from 'react';



export default function Charts() {

    const [usersInfo, setUsersInfo] = useState<UserData[]>([])


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/user/dashboard/api')

            let usersInfo = await data.json()
            setUsersInfo(usersInfo)
        }

        fetchData()

    }, [])
    return (
        <div >
            {usersInfo.map((userInfo) =>
            (
                <div key={userInfo.id}>
                    <UserCard userInfo={userInfo}/>
                </div>  
            ))}
        </div>
    )
}
