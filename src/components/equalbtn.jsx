import React from "react";

function Equalbtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-5 rounded-lg w-2/4 text-center bg-orange-400 font-bold text-white cursor-pointer"
    >
      =
    </button>
  );
}

export default Equalbtn;
