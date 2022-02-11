import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
const IMG_API = "https://res.cloudinary.com/drrkccbb4/";

const PostDetail = () => {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getSinglePost();
  }, []);

  const getSinglePost = async () => {
    const { data } = await axios.get(
      `https://howtobackendapi.herokuapp.com/api/${id}/`
    );
    console.log(data);
    setPosts(data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
    history.push("/");
  };

  return (
    <div className="id-post">
      <div className="id-container">
        <div>
          <strong className="id-title">Title: {posts.title}</strong>
        </div>
        <img className="id-image" src={IMG_API + posts.image}></img>
        <div>
          <p className="id-description">{posts.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
