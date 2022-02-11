import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./practice.css";

const ShowPosts = () => {
  const [Posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const result = await axios.get("http://localhost:8000/api/");

    console.log(result.data);
    setPosts(result.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const goToDetail = () => {
    alert("detail page");
  };

  return (
    <div className="container2">
      <div className="posts-table2">
        <div className="table-head2">
          <div className="subjects2">Posts</div>
        </div>
        {Posts.map((Post, index) => (
          <div>
            <div className="table-row2">
              <Link to={`/${Post.id}`} className="subjects2">
                <div>
                  <img
                    className="post-image"
                    src={Post.image}
                    height="250"
                    width="400"
                  />
                </div>
                <div>
                  <div className="post-title">{Post.title}</div>
                  <p className="post-description">{Post.description}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShowPosts;
