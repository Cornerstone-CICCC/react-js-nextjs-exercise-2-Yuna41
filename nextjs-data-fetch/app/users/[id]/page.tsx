import { User } from "../components/UserList"

type Props = {
  params: Promise<{ id: string }>
}

const page = async({ params }: Props) => {
  const { id } = await params
  let user: User

  try{
    const res = await fetch(`https://dummyjson.com/users/${id}`)
    const data = await res.json()
    user = data
  } catch(err) {
    console.error(err)
    throw new Error('Unable to fetch user')
  }

  return (
    <div className="max-w-3xl mx-auto p-4 pt-10">
      <h1 className="font-bold mb-6 text-2xl">User's Information</h1>
      <dl className="p-4 bg-sky-100">
        <div className="mb-4">
          <dt className="font-bold">First name</dt>
          <dd>{user.firstName}</dd>
        </div>
        <div className="mb-4">
          <dt className="font-bold">Last name</dt>
          <dd>{user.lastName}</dd>
        </div>
        <div className="mb-4">
          <dt className="font-bold">Age</dt>
          <dd>{user.age}</dd>
        </div>
        <div className="mb-4">
          <dt className="font-bold">Gender</dt>
          <dd>{user.gender}</dd>
        </div>
        <div>
          <dt className="font-bold">Email</dt>
          <dd>{user.email}</dd>
        </div>
      </dl>
    </div>
  )
}

export default page