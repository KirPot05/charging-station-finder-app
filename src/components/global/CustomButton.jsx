import React from "react";

function CustomButton({ btnText, icon: Icon, className }) {
  return (
    <button
      type="submit"
      className={`${
        Icon && "flex items-center gap-2"
      } rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {btnText}
    </button>
  );
}

export default CustomButton;
