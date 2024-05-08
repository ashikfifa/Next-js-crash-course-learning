import React from "react";

async function GetAllPost() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  return posts.json()
}

export default GetAllPost;
