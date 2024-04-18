import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer xl:mt-12 bg-black tracking-widest">
      <div className="footer-main w-full xl:w-4/5 xl:m-auto mb-2 p-4 xl:flex">
        <div className="flex w-full justify-between xl:w-6/12">
          <div className="footer-col-1 w-6/12 xl:w-full space-y-4">
            <p className="text-white text-xs pr-4 xl:text-sm">
              WHERE PASSION MEETS PERFECTION !
            </p>
          </div>
          <div className="footer-col-2 w-6/12 xl:w-full mr-2 md:mr-0 space-y-4">
            <h3
              className="text-white text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "#4fa0e3",
                fontWeight: "bolder",
              }}
            >
              quiz
            </h3>
            <Link
              to="/"
              className="no-underline text-white text-xs block xl:text-sm"
            >
              All Quiz
            </Link>
          </div>
        </div>
       
      </div>

    </div>
  );
};
