import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./posts.css";
import data, { postData } from "../../data";
import { withRouter } from "react-router";

function Post() {
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  /*
  let dataSearch = postData.coding.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <div className="container">
      <div className="center">
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={searchText.bind(this)}
        />
      </div>
      <div className="posts-table">
        <div className="table-head">
          <div className="subjects">Posts</div>
          <div className="replies">Replies/Views</div>
          <div className="last-reply">Last Reply</div>
        </div>
        {dataSearch.map((item, index) => {
          return (
            <div className="table-row">
              <Link to="" className="subjects">
                <div>{item.Title}</div>
                <p>{item.Description}</p>
                <span>
                  Started by
                  <b>
                    <a href=""> User</a>
                  </b>
                </span>
              </Link>
              <div className="replies">
                3 replies <br></br> 125 views
              </div>
              <div className="last-reply">
                Nov 24 2021 <br></br> by
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ); */
}

export default Post;
