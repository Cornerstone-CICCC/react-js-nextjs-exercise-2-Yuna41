import { User } from "@/app/users/components/UserList"

type Props = {
  params: Promise<{ id: string }>
}

const page = async ({ params }: Props) => {
  const { id } = await params
  let user: User

  const res = await fetch(`https://dummyjson.com/users/${id}`)
  const data = await res.json()
  user = data

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8">
        <dl>
          <div className="flex gap-1">
            <dt>ID:</dt>
            <dd>{user.id}</dd>
          </div>
          <div className="flex gap-1">
            <dt>First name:</dt>
            <dd>{user.firstName}</dd>
          </div>
          <div className="flex gap-1">
            <dt>Last name:</dt>
            <dd>{user.lastName}</dd>
          </div>
        </dl>
        <a href="/users" className="inline-block mt-2 underline">Close</a>
      </div>
    </div>
  )
}

export default page