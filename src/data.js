import cook from "./img/food-delivery.png";
import code from "./img/programming.png";
import sports from "./img/heart-rate.png";
import martial from "./img/martial-arts.png";
import sing from "./img/microphone.png";
import { useState, useEffect } from "react";
import axios from "axios";

export const postData = {
  cook: [
    {
      Title: "How to make the best chicken alfredo.",
      Description: "Creamy chicken alfredo. It will change your life!",
    },
    {
      Title: "How to make the best chicken alfredo.",
      Description: "Creamy chicken alfredo. It will change your life!",
    },
    {
      Title: "How to make the best chicken alfredo.",
      Description: "Creamy chicken alfredo. It will change your life!",
    },
    {
      Title: "How to make the best chicken alfredo.",
      Description: "Creamy chicken alfredo. It will change your life!",
    },
    {
      Title: "How to make the best chicken alfredo.",
      Description: "Creamy chicken alfredo. It will change your life!",
    },
    {
      Title: "How to make the best chicken alfredo.",
      Description: "Creamy chicken alfredo. It will change your life!",
    },
    {
      Title: "How to make the best Turkey!",
      Description: "Creamy chicken alfredo. It will change your life!",
    },
  ],
  coding: [
    {
      Title: "What is REACT?",
      Description: "Learn REACT in 3 Hours!",
    },
  ],
  workout: [
    {
      Title: "GET SHREDDED!",
      Description: "Get ready to change your life with this killer workout!",
    },
  ],
  martialArts: [
    {
      Title: "KickBoxing",
      Description: "Kickboxing routine to go from a rookie to a pro.",
    },
  ],
  voiceLessons: [
    {
      Title: "Want to learn how to sing?",
      Description:
        "Follow this simple routine everyday to become a better singer.",
    },
  ],
};

let cookLength = postData.cook.length;
let codingLength = postData.coding.length;
let workoutLength = postData.workout.length;
let martialArtsLength = postData.martialArts.length;
let voiceLessonsLength = postData.voiceLessons.length;

const data = {
  cardData: [
    {
      Categories: "Cook",
      Description: "Learn to cook your favorite foods.",
      Image: cook,
      Id: 1,
      postLength: cookLength,
      cook: [
        {
          Title: "How to make macaroni",
          Description: "BEST MACARONI YOU WILL EVER EAT!",
        },
        {
          Title: "How to make the best chicken alfredo.",
          Description: "Creamy chicken alfredo. It will change your life!",
        },
      ],
    },
    {
      Categories: "Coding",
      Description: "Learn how to code from scratch.",
      Image: code,
      Id: 2,
      postLength: codingLength,
    },
    {
      Categories: "Workout",
      Description: "Make yourself stronger than your excuses.",
      Image: sports,
      Id: 3,
      postLength: workoutLength,
    },
    {
      Categories: "Martial Arts",
      Description: "Learn how to become a martial master.",
      Image: martial,
      Id: 4,
      postLength: martialArtsLength,
    },
    {
      Categories: "Voice Lessons",
      Description: "Learn how to sing now.",
      Image: sing,
      Id: 5,
      postLength: voiceLessonsLength,
    },
  ],
};

export default data;

//# of posts in each category.
