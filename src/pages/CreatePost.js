import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./createpost.css";
import data from "../data";
import { Link } from "react-router-dom";

const CreatePost = () => {
  const [filter, setFilter] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  const history = useHistory();

  const AddPost = async () => {
    let formField = new FormData();

    formField.append("title", title);
    formField.append("description", description);
    formField.append("category", category);
    formField.append("image", image);

    await axios({
      method: "post",
      url: "https://howtobackendapi.herokuapp.com/api/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      history.push("/");
    });
  };
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
    } else {
      fetch("http://127.0.0.1:8000/api/v1/users/auth/user/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsername(data.username);
        });
    }
  }, []);

  console.log(image);
  console.log(title);
  console.log(description);
  console.log(category);

  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <div className="mainBody">
      <div class="sidebar">
        <div class="sidebar__categories">
          <div>
            <span>Categories</span>
          </div>
        </div>
        <hr />
        {dataSearch.map((item, index) => (
          <div class="sidebar__categories ">
            <Link to={item.Categories} class="sidebar__category category-link">
              {item.Categories}
            </Link>
          </div>
        ))}

        <hr />
      </div>
      <div className="post-container">
        <form className="form">
          <input id="user" type="text" style={{ display: "none" }} />
          <input
            className="createtitle"
            type="text"
            placeholder="Title"
            value={title}
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="createdesc"
            type="text"
            placeholder="Description..."
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="select">
            <label style={{ color: "white", marginRight: "20px" }}>
              Category
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              required
              value={category}
            >
              <option disabled value="">
                Choose A Category
              </option>
              <option value="Cook">Cook</option>
              <option value="Coding">Coding</option>
              <option value="Workout">Workout</option>
              <option value="Martial Arts">Martial Arts</option>
              <option value="Voice Lessons">Voice Lessons</option>
            </select>
          </div>
          <div className="form-bottom">
            <input
              className="upload"
              type="file"
              name="image"
              required
              src={image}
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button onClick={AddPost} className="createsubmit">
              POST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
