import Link from "next/link";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
}

const UserList = async () => {
  const res = await fetch('https://dummyjson.com/users')
  const data = await res.json()
  const users: User[] = data.users

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          <Link href={`/users/${u.id}`} className="underline">{u.firstName}</Link>
        </li>
      ))}
    </ul>
  )
}

export default UserList