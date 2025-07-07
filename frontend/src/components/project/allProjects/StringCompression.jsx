import React, { useState } from "react";
import { Link } from "react-router-dom";

const StringCompression = () => {
  const [input, setInput] = useState("");
  const [str, setStr] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const compressString = (s) => {
    if (s.length === 0) {
      alert("Enter any string first!");
      return;
    }
    const sorted = s.split("").sort().join("");
    let result = "";
    let i = 0;
    while (i < sorted.length) {
      const currChar = sorted[i];
      let count = 0;

      while (i < sorted.length && sorted[i] === currChar) {
        count++;
        i++;
      }

      result += currChar + (count > 1 ? count : "");
    }
    setStr(result);
    setInput("");
  };

  return (
    <div className="w-full mt-2">
      <Link to="/" className="p-2 border-2 border-black">Home</Link>
      <h1 className="mt-2 mb-3 text-center text-2xl text-red-600">
        String Compression
      </h1>
      <div className="w-[80%] h-auto m-auto p-5 border-2 border-blue-700 rounded-lg flex flex-col">
        <label htmlFor="input" className="text-black font-bold mb-2">
          Enter String:-
        </label>
        <input
          id="input"
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter the string here"
          className="p-2 text-md border-2 border-black rounded-md outline-none"
        />
        <button
          onClick={() => compressString(input)}
          className="text-center mt-2 border-2 border-black m-auto p-1 rounded-lg text-white bg-black hover:bg-white hover:text-black"
        >
          Convert
        </button>
        {str && (
          <textarea
            value={str}
            rows={10}
            cols={40}
            className="mt-2 border-2 border-black p-3 rounded-md outline-none resize-y"
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default StringCompression;
