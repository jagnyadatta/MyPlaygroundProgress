import React, { useState } from "react";
import Progress from "../progress/Progress";

const DashBoard = () => {
  const [menu, setMenu] = useState("progress");
  return (
    <div className="flex items-center justify-center flex-col mb-4">
      <div className="flex w-[200px] justify-center border border-t-0 border-black rounded-bl-[18px] rounded-br-[18px]">
        <button
          onClick={() => setMenu("progress")}
          className={`${
            menu === "progress"
              ? "bg-black text-white"
              : "bg-white text-gray-800"
          } w-full pt-2 pb-2 border border-t-0 border-black rounded-bl-2xl`}
        >
          Progress
        </button>
        <button
          onClick={() => setMenu("projects")}
          className={`${
            menu === "projects"
              ? "bg-black text-white"
              : "bg-white text-gray-800"
          } w-full pt-2 pb-2 border border-t-0 border-black rounded-br-2xl`}
        >
          Projects
        </button>
      </div>
      {menu === "progress" ? (
        <div className="w-[90%] m-auto">
          <Progress />
        </div>
      ) : (
        <div>
          <h2>Projects</h2>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
