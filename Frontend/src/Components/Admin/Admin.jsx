import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUserDataFromBackend } from "../../Redux/action.js";
import { QuizForm } from "./QuizForm.jsx";
import { UserdetailForAdmin } from "./UserdetailForAdmin.jsx";

export const Admin = () => {
  const allUsers = useSelector((state) => state.mernQuize.Alluser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addquiz = () => {
    navigate("/addquiz");
  };

  useEffect(() => {
    dispatch(getAllUserDataFromBackend());
  }, []);

  return (
    <div>
     
      <div className="border-red-500 absolute bg-orange-600 right-24 top-28 border-2 mb-8 p-1 pl-2  pr-2 ">
        <button onClick={addquiz}> ADD QUIZ </button>
      </div>
      <UserdetailForAdmin data={allUsers} />
    </div>
  );
};
