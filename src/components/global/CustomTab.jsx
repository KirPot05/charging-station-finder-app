import React from "react";

function CustomTab({ title }) {
  return (
    <button className="border-b-[3px] border-transparent focus:text-primary focus:border-b-primary">
      {title}
    </button>
  );
}

export default CustomTab;
