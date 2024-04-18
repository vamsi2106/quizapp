import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../../Redux/action.js";
import { Link } from "react-router-dom";

export const Profile = () => {
  const data = useSelector((state) => state.mernQuize.QuizData);
  const [count, setCount] = useState(0);
  const userName = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="margin-auto shadow-2xl h-96 w-11/12 ml-16 ">
      <div className="flex flex-col ">
        <h1 className="flex justify-center text-sky-600  ">
          {" "}
          Welcome! {userName}👋
        </h1>
        <div className="absolute bg-teal-300 rounded-2xl right-24 top-44 border-2 mb-8 p-1 pl-2  pr-2  ">
          <Link to="/">
            <button className="text-xl font-bold rounded-md">Attempt Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
