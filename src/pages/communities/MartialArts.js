import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./posts.css";
import data from "../../data";
import axios from "axios";

export default function Coding() {
  const [filter, setFilter] = useState("");
  const [Posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const result = await axios.get(
      "https://howtobackendapi.herokuapp.com/api/"
    );

    console.log(result.data);
    setPosts(result.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <div>
      <div class="mainBody">
        <div class="sidebar">
          <div class="sidebar__categories">
            <div>
              <span>Categories</span>
            </div>
          </div>
          <hr />
          {dataSearch.map((item, index) => (
            <div class="sidebar__categories ">
              <Link
                to={item.Categories}
                class="sidebar__category category-link"
              >
                {item.Categories}
              </Link>
            </div>
          ))}

          <hr />
        </div>

        <div class="posts">
          <div class="posts__container">
            {Posts.filter((post) => post.category === "Martial Arts").map(
              (Post, index) => (
                <div class="post2">
                  <Link to={`/${Post.id}`} class="post__thumbnail">
                    <img src={Post.image} alt="" />
                  </Link>
                  <div class="post__details">
                    <div class="post-title">
                      <h3>{Post.title}</h3>
                      <span>{Post.description}</span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
