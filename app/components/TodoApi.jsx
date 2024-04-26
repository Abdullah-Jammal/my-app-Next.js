'use client'

import React from 'react'
import { useState, useEffect } from 'react'

const TodoApi = () => {
  const [data, setData] = useState()
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const convert = await res.json()
      setData(convert)
    }
    fetchData()
  }, [])

  return (
    <div>
      {data?.length ? data.map((ele, ind) => {
        return (
          <div key={ind} className='newDiv'>
            <h1>{ele.title}</h1>
            <p>{ele.body}</p>
          </div>
        )
      }) : ''}
    </div>
  )
}

export default TodoApi
