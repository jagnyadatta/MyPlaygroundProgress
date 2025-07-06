import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { toast } from "react-toastify";
import axios from "axios";
import { PROGRESS_API } from "../../utils/constant";
import Loader from "../ui/Loader";

const Progress = () => {
  const [isModal, setIsModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const fetchData = async () => {
    try {
      const res = await axios.get(`${PROGRESS_API}/get-progress`);
      if (res.data.success) {
        setData(res.data.data);
      }
      // toast.success(res.data?.message);
    } catch (error) {
      console.log(error);
      toast.error(res.data?.message);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleAddProgress = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await axios.post(`${PROGRESS_API}/add-progress`, input, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(res.data?.message);
      fetchData();
    } catch (error) {
      console.log(error);
      toast.error(res.data?.message);
    } finally{
      setLoader(false);
    }
    setInput({
      title: "",
      content: "",
    });
    setIsModal(false);
  };

  useEffect(() => {
    fetchData();
    console.log("called");
  }, []);
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
          <Card
            key={id}
            id={id}
            title={item.title}
            content={item.content}
            date={item.dateTime}
          />
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
            <label
              htmlFor="title"
              className="w-full text-md md:text-lg text-black "
            >
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
            <label
              htmlFor="content"
              className="w-full text-md md:text-lg text-black"
            >
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
            <button
              type="submit"
              className="flex border-2 border-black pt-1 pb-1 pl-2 pr-2 rounded-md text-white bg-black text-lg items-center justify-center"
            >
              {
                loader ? <Loader /> : "Add Progress"
              }
            </button>
          </form>
          <div
            onClick={() => setIsModal(false)}
            className="absolute top-2 right-4 text-2xl font-bold cursor-pointer hover:text-black"
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
