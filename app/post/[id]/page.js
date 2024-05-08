import CommentComponent from "@/app/components/comment.component";
import GetSinglePost from "@/lib/getSinglePost";
import React, { Suspense } from "react";

async function SinglePostpage({ params }) {
  const { id } = params;
  const post = await GetSinglePost(id);

  return (
    <div>
      SinglePostpage id: {id} <br />
      {post.body}
      <br />
      <Suspense fallback="Loading .....">
        <CommentComponent />
      </Suspense>
    </div>
  );
}

export default SinglePostpage;
