import React from 'react'

async function GetAllComment() {
    const comment= await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
  return comment.json()
}

export default GetAllComment