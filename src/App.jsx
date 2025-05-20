import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarked, setBookmarked] = useState([]);

  const handleClicked = (blog) => {
    const newBookmarked = [...bookmarked, blog];
    setBookmarked(newBookmarked);
  };

  const [time1, setTime] = useState(0);
  const handleMarkedASRead = (time, id) => {
    const newTime = time1 + time;
    setTime(newTime);
    handleRemove(id);
  };

  const handleRemove = (id) => {
    const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookMark);
  };
  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs
            handleClicked={handleClicked}
            handleMarkedASRead={handleMarkedASRead}
          ></Blogs>
        </div>

        <div className="right-container w-[30%]">
          <h1>Reading time : {time1}</h1>
          <h1>bookmarked count : {bookmarked.length}</h1>
          {bookmarked.map((marked) => (
            <p className="bg-red-500 p-2 shadow-2xl m-2 text-white">
              {marked.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
