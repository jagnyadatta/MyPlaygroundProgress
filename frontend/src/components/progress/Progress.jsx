import React, { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";

const allProgress = [
    {   
        id: 1,
        title: "DSA",
        content: "Completed the chapter of reactjs"
    },
    {
        id: 2,
        title: "Javascript",
        content: "Completed the chapter of javascript"
    },
    {
        id: 3,
        title: "Java DSA",
        content: "Completed the chapter of DSA and done many questions on java"
    },
    {
        id: 4,
        title: "Project",
        content: "Completed the Navbar of the Portfolio page"
    },
];

const Progress = () => {
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState(allProgress);
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleAddProgress = (e) => {
    e.preventDefault();
    setData([...data, input]);
    setInput({
      title: "",
      content: "",
    });
    setIsModal(false);
  };
  return (
    <div className="w-full flex flex-col mt-4">
      <div className="flex gap-4 justify-center items-center">
        <h3 className="text-md sm:text-xl">Add Daily Progress</h3>
        <div onClick={() => setIsModal(true)}>
          {" "}
          <Button />{" "}
        </div>
      </div>
      <div className="mt-4">
        {/* <Card /> */}
        {data.map((item, id) => (
          <Card id={id} title={item.title} content={item.content} />
        ))}
      </div>

      {/* Modal Popover */}
      <div>
        <div
          className={`${
            isModal ? "block" : "hidden"
          } w-full h-full bg-black absolute top-0 left-0 opacity-30`}
        ></div>
        <div
          className={`${
            isModal ? "block" : "hidden"
          } w-[92%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-[60%] bg-white fixed top-40 left-4 sm:left-28 md:top-32 lg:left-80 rounded-lg p-4`}
        >
          <form onSubmit={handleAddProgress} className="mt-2">
            <label htmlFor="title" className="w-full text-md md:text-lg text-black ">
              Enter Title :
            </label>
            <input
              type="text"
              name="title"
              required
              value={input.title}
              onChange={changeHandler}
              className="w-full h-8 mb-2 border-2 border-black rounded-md p-2 outline-none"
            />
            <label htmlFor="content" className="w-full text-md md:text-lg text-black">
              Enter Description :
            </label>
            <textarea
              name="content"
              id="content"
              rows={8}
              required
              value={input.content}
              onChange={changeHandler}
              className="w-full mb-2 border-2 border-black rounded-md p-2 outline-none"
            ></textarea>
            <button type="submit" className="border-2 border-black pt-1 pb-1 pl-2 pr-2 rounded-md text-white bg-black text-lg">
              Add Progress
            </button>
          </form>
          <div onClick={()=> setIsModal(false)} className="absolute top-2 right-4 text-2xl font-bold cursor-pointer hover:text-black">X</div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
