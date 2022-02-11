import { useState, useEffect } from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import data from "../../data";
import axios from "axios";

export default function Categories() {
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await axios.get("http://localhost:8000/api/");
    console.log(response.data);
    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  let cooking = posts.filter((post) => post.category === "Cook");
  let cookinglength = cooking.length;

  return (
    <div className="container">
      <div className="subforum">
        <div className="center">
          <input
            type="text"
            placeholder="Search"
            value={filter}
            onChange={searchText.bind(this)}
          />
        </div>
        <div className="subforum-title">
          <h1>HowTo:</h1>
          <h1>{cookinglength}</h1>
        </div>
        {dataSearch.map((item, index) => {
          return (
            <div className="subforum-row">
              <div className="category-icon subforum-column center">
                <img src={item.Image}></img>
              </div>
              <Link to={item.Categories} className="subforum-column">
                <div className="subforum-description">
                  <h1>
                    <a href="">{item.Categories}</a>
                  </h1>
                  <p>{item.Description}</p>
                </div>
              </Link>
              <div className="subforum-stats subforum-column center">
                <span>{item.postLength} Posts</span>
              </div>
              <div className="subforum-info subforum-column">
                <b>
                  <a href="">Last Post</a> by <a href="">Jeremy</a>
                </b>
                <br></br> on <small>24 Nov 2021</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
