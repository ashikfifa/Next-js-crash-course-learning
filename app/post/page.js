import GetAllPost from "@/lib/getAllPost";
import GetAllComment from "@/lib/getComment";
import Link from "next/link";
import React from "react";

async function Postpage() {
  const posts = await GetAllPost();
  
  return (
    <div>
      {posts?.map((postIndex) => (
        <li key={postIndex.id}>
          {" "}
          <Link href={`/post/${postIndex.id}`}> {postIndex.title}</Link>{" "}
        </li>
      ))}

    </div>
  );
}

export default Postpage;
