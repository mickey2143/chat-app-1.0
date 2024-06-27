import React from "react";

const Button = ({ type = "bg-blue-950", text, onClick, busy = false, textColor = "text-white" }) => {
  return (
    <button
      disabled={busy}
      onClick={onClick}
      className={`w-full ${type} ${textColor} p-2  rounded-md disabled:bg-gray-400`}
    >
      {text}
    </button>
  );
};

export default Button;
