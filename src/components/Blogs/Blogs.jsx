import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleClicked,handleMarkedASRead}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl">Total : {blogs.length}</h1>
      <div className="all-blogs grid grid-cols-2 ">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} handleClicked={handleClicked} handleMarkedASRead={handleMarkedASRead}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
