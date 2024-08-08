import React from "react";

function Specialbtn({ num, onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-5 rounded-lg w-1/4 text-center bg-slate-200 cursor-pointer"
    >
      {num}
    </button>
  );
}

export default Specialbtn;
