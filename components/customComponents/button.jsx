import React from "react";

const Button = ({ type, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-700 p-2 text-white rounded-md"
    >
      {text}
    </button>
  );
};

export default Button;
