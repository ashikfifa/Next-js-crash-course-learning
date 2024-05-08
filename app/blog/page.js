import Link from "next/link";
import React from "react";

function Blogpage() {
  const blogs = [
    {
      id: 1,
      desc: "blog 1 desc",
    },
    {
      id: 2,
      desc: "blog 2 desc",
    },
    {
      id: 3,
      desc: "blog 3 desc",
    },
  ];
  return (
    <div>
      {blogs.map((blog) => (
        <li key={blog.id}>
          {" "}
          <Link href={`/blog/${blog.id}`}> {blog.desc}</Link>{" "}
        </li>
      ))}
    </div>
  );
}

export default Blogpage;
