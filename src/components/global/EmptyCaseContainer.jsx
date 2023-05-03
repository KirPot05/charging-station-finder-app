import React from "react";
import CustomButton from "./CustomButton";
import { FolderPlusIcon, PlusIcon } from "@heroicons/react/24/outline";

function EmptyCaseContainer({ title, message, btnText }) {
  return (
    <section className="flex items-center justify-center border-2 p-10 min-h-[80vh] bg-white m-4">
      <div className="flex flex-col items-center">
        <FolderPlusIcon className="h-16 w-16 text-gray-500 my-4" />

        <h1 className="text-xl font-semibold text-gray-700"> {title} </h1>
        <p className="text-gray-500">{message}</p>

        <CustomButton btnText={btnText} icon={PlusIcon} className="my-4" />
      </div>
    </section>
  );
}

export default EmptyCaseContainer;
