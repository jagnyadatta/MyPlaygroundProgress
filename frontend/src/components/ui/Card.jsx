import React from "react";
import styled from "styled-components";

const Card = ({ id, title, content, date}) => {
  return (
    <StyledWrapper>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
        <div className="w-full notification sm:notification mt-2">
          <div className="notiglow" />
          <div className="notiborderglow" />
          <div className="count">{id + 1}</div>
          <div className="notititle">{title}</div>
          <div className="notibody">{content}</div>
          <div className="dateBody">{date}</div>
        </div>
        {/* <div className="flex gap-1 sm:gap-5 items-center">
          <button className="w-14 h-8 sm:w-28 sm:h-10 border-2 rounded-lg bg-green-700 text-white">Edit</button>
          <button className="w-16 h-8 sm:w-28 sm:h-10 border-2 rounded-lg bg-red-700 text-white">Delete</button>
        </div> */}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .count {
    position: absolute;
    width: 30px;
    height: 30px;
    color: #32a6ff;
    font-weight: bold;
    z-index: 10;
    top: 5px;
    right: 5px;
    text-align: center;
  }
  .dateBody {
    position: absolute;
    color: #32a6ff;
    z-index: 10;
    font-size: 12px;
    bottom: 5px;
    right: 8px;
    text-align: center;
  }
  .notification {
    display: flex;
    flex-direction: column;
    isolation: isolate;
    position: relative;
    // width: 50rem;
    // height: 8rem;
    background: #29292c;
    border-radius: 1rem;
    overflow: hidden;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
    --color: #32a6ff;
  }

  .notification:before {
    position: absolute;
    content: "";
    inset: 0.0625rem;
    border-radius: 0.9375rem;
    background: #18181b;
    z-index: 2;
  }

  .notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: 0.125rem;
    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
  }

  .notification:hover:after {
    transform: translateX(0.15rem);
  }

  .notititle {
    color: var(--color);
    padding: 0.65rem 0.25rem 0.4rem 1.25rem;
    font-weight: 500;
    font-size: 1.1rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notititle {
    transform: translateX(0.15rem);
  }

  .notibody {
    color: #99999d;
    padding: 0 1.25rem 2rem 1.25rem;
    white-space: pre-line;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notibody {
    transform: translateX(0.25rem);
  }

  .notiglow,
  .notiborderglow {
    position: absolute;
    width: 20rem;
    height: auto;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle closest-side at center,
      white,
      transparent
    );
    opacity: 0;
    transition: opacity 300ms ease;
  }

  .notiglow {
    z-index: 3;
  }

  .notiborderglow {
    z-index: 1;
  }

  .notification:hover .notiglow {
    opacity: 0.1;
  }

  .notification:hover .notiborderglow {
    opacity: 0.1;
  }

  .note {
    color: var(--color);
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 0.9rem;
    width: 75%;
  }
`;

export default Card;
