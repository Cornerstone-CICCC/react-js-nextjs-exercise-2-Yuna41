import Link from "next/link"

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 pt-10">
      <h1 className="font-bold mb-4 text-2xl">Welcome to my homepage!</h1>
      <Link href="/users" className="underline">User List</Link>
    </div>
  )
}

export default Home