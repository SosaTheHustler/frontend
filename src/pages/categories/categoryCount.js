import { useState, useEffect } from "react";
import axios from "axios";

export function Counter() {
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
  let coding = posts.filter((post) => post.category === "Coding");
  let workout = posts.filter((post) => post.category === "Workout");
  let martialArts = posts.filter((post) => post.category === "Martial Arts");
  let voiceLessons = posts.filter((post) => post.category === "Voice Lessons");

  let cookLength = cooking.length;
  let codingLength = coding.length;
  let workoutLength = workout.length;
  let martialArtsLength = martialArts.length;
  let voiceLessonsLength = voiceLessons.length;
}
