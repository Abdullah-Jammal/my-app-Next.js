
import React from 'react'

export default async function postDetaildPage({params}) {
  const postId = params.postId
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  const post = await res.json()
  return (
    <div>
      <h1>Post Details</h1>
      <p>{post.title}</p>
    </div>
  )
}

