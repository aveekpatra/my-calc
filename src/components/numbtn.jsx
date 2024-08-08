import React from "react";

function Numbtn({ num, onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-5 rounded-lg w-1/4 text-center bg-slate-300 cursor-pointer"
    >
      {num}
    </button>
  );
}

export default Numbtn;
