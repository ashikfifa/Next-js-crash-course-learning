import React from 'react'

async function CommentComponent() {
    const comment = await GetAllComment();
  return (
    <div>
        {comment.map((commentIndex) => (
        <li key={commentIndex.id}> {commentIndex.name} </li>
      ))}
    </div>
  )
}

export default CommentComponent