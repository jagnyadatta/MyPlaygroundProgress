import React from "react";
import "./project.css";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl mt-2 text-center">All DSA Projects</h2>
      <div className="w-[90vw] h-auto min-h-[80vh] pl-4 pr-5 pt-2 pb-2">
        <div className="w-full border-3 border-gray-800 rounded-lg">
          <div className="card">
            <div className="title">1. String Compression</div>
            <div className="icon">
              <i className="fa-thin fa-laptop-code"></i>
            </div>
            <div className="content">
              <p>
                You can enter any string it will be converted to the compressed string. <br />
                Ex:- "aabbcccc" &nbsp;  ={`>`} &nbsp;  "a2b2c4"
              </p>
            </div>
            <Link to="/string-compression" className="tryBtn w-20 rounded-lg p-1 font-bold bg-slate-700 text-white hover:bg-white hover:text-gray-600 text-center">Try it</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
