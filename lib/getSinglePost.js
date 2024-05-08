import React from 'react'

 async function GetSinglePost(id) {
    const singlePost= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return singlePost.json()
}

export default GetSinglePost