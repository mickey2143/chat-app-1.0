import React from "react";

const Button = ({ type, text, onClick, busy = false }) => {
  return (
    <button
      disabled={busy}
      onClick={onClick}
      className="w-full bg-blue-700 p-2 text-white rounded-md disabled:bg-gray-400"
    >
      {text}
    </button>
  );
};

export default Button;
