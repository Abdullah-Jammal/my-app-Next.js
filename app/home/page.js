import Link from "next/link";
export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  const postJSX = posts.map((post) => {
    return (
      <Link href={`/home/${post.id}`}>
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    )
  })
  return (
    <div>
      <h1>My Posts</h1>
      {postJSX}
    </div>
  );
}
