"use client";
import { useEffect, useState } from "react"
export default function page() {
    const [users, setUsers] = useState<string[]>([]);

    const FetchUsers = async () => {
        const response = await fetch("/api/users");
        const data = await response.json();
        console.log("data fetched from /api/users");
        setUsers(data.users);
    } // users: ["Varad","sharvari","adt"]

    useEffect(() => {
        FetchUsers();
    }, []);
    // will run when the component mounts

    return (
        <>
            {/* list of user names with numbers */}
            <div>
                <ul>
                    {users.map((content, i) => (
                        <li key={i}>{i + 1}. {content}</li>
                    ))}
                </ul>

                <button onClick={FetchUsers} className="btn btn-primary">Refresh Users</button>
            </div>
        </>
    )
}
