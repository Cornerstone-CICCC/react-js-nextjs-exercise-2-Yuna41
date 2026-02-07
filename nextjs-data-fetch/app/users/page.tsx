import UserList from "./components/UserList"



const Users = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 pt-10">
      <h1 className="font-bold mb-4 text-2xl">Users List</h1>
      <UserList />
    </div>
  )
}

export default Users