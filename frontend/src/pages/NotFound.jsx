// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 underline mt-4 block">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
