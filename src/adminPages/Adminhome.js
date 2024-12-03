import React, { useState } from "react";
import Createcat from "./Createcat";
import CreatePost from "./CreatePost";
import Viewpost from "./Viewpost";

function Adminhome() {
  // State to hold form data
  const [categoryName, setCategoryName] = useState("");
  const [postData, setPostData] = useState({
    title: "",
    author: "",
    date: "",
    category: "",
    postImage: null,
    content: "",
  });
  const [createPost, setCreatePost] = useState("hidden");
  const [createCategory, setCreateCatgory] = useState("hidden");
  const [viewpost, setViewPost] = useState("hidden");
  const [welcome, setWelcome] = useState("welcome");
const [storedData, setStoredData] = useState(
  JSON.parse(localStorage.getItem("postData")) || []
  );  

  const [imagePreview, setImagePreview] = useState(null); // State to hold the image preview URL




  const handleWelcome = (event) => {
    event.preventDefault();
    if (welcome) {
      setCreatePost("hidden");
      setCreateCatgory("hidden");
      setViewPost("hidden");
      setWelcome("welcome");
    } else {
    }
  };
  const handleCreatePost = (event) => {
    // event.preventDefault();
    if (createPost) {
      setCreatePost("createPost");
      setCreateCatgory("hidden");
      setViewPost("hidden");
      setWelcome("hidden");
    }
  };
  const handleCreateCategory = (event) => {
    event.preventDefault();
    if (createCategory) {
      setCreatePost("hidden");
      setCreateCatgory("createCategory");
      setViewPost("hidden");
      setWelcome("hidden");
    }
  };
  const handleViewPost = (event) => {
    // event.preventDefault();
    if (viewpost) {
      setCreatePost("hidden");
      setCreateCatgory("hidden");
      setViewPost("viewpost");
      setWelcome("hidden");
    }
  };

  return (
    <div>
      <div className="adnav">
        <h1>ADMIN PANEL</h1>
      </div>
      <div className="sidenav_fullpage">
        <div className="sidenav">
          <li onClick={handleWelcome}>
            <a href="#">Dash Board</a>
          </li>
          <li onClick={handleCreateCategory}>
            <a href="#">Create post category</a>
          </li>
          <li onClick={handleCreatePost}>
            <a href="#">Create post</a>
          </li>
          <li onClick={handleViewPost}>
            <a href="/admin">View all post</a>
          </li>
          <li>
            <a href="#">Log out</a>
          </li>
        </div>
        <div className="fullpage">
          <div className={welcome}>
            <h1>Welcome To admin page</h1>
          </div>
          <div className={createCategory}>
            <Createcat/>
          </div>
          <div className={createPost}>
            <CreatePost/>
          </div>
          <div className={viewpost}>
            <Viewpost/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminhome;
