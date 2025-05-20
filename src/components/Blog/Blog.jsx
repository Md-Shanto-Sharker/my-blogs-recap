import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleClicked, handleMarkedASRead }) => {
  return (
    <div className="m-5">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="w-[500px] h-[200px]" src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author flex justify-around items-center">
            <h3>{blog.author}</h3>
            <img className="w-16 rounded-4xl " src={blog.author_img} alt="" />
            <button>
              <FaBookmark
                onClick={() => handleClicked(blog)}
                size={25}
              ></FaBookmark>
            </button>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="hashtags flex justify-between">
            {blog.hashtags.map((has, index) => (
              <p key={index}>{has}</p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleMarkedASRead(blog.reading_time, blog.id)}
              className="btn btn-primary"
            >
              mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
