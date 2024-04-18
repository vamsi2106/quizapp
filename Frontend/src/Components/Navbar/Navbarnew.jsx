import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logouthandleraction } from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbarnew = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const userName = useSelector((state) => state.mernQuize.userName);
  const adminName = useSelector((state) => state.mernQuize.adminName);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logouthandler = () => {
    if (userName !== null) {
      dispatch(Logouthandleraction());
      toast(`${userName} Successfully Logout `, {
        type: "success",
      });
    }
    if (adminName == "Sudhir P Chavhan") {
      toast(`Sudhir P Chavhan Successfully Logout `, {
        type: "success",
      });
      dispatch(Logouthandleraction());
    }
    navigate("/");
  };

  const profilenavigate = () => {
    navigate("/profile");
  };
  return (
    <div className="w-11/12 h-15 m-auto flex bg-blue-200 mb-8 ">
      <Link to="/" className="w-4/12 flex ">
        <img
          className="rounded-md w-[10vw]"
          src="data:image/png;base64,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"
          alt=""
        />
      </Link>

      <div className="w-2/5 ml-14 ">

      </div>

      <div className="w-3/12 flex justify-around py-4 mt-2">
        {" "}
        <div className="flex">
          <div className="">
            {userName !== null || adminName !== null ? (
              <div className="flex ">
                <div
                  className="font-medium cursor-pointer text-xl"
                  onClick={profilenavigate}
                >
                  PROFILE
                </div>{" "}
                <div
                  onClick={() => {
                    logouthandler();
                  }}
                  className="ml-4 font-medium cursor-pointer text-xl"
                >
                  LOGOUT
                </div>
              </div>
            ) : (
              <Link to="/register" className="font-medium mt-16 ml-24 text-2xl">
                SIGN IN
              </Link>
            )}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-10 mt-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
