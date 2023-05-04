import React, { useState } from "react";
import VehicleForm from "../components/pages/vehicles/VehicleForm";

function VehicleProperty({ property, value }) {
  return (
    <p className="text-sm">
      {" "}
      <span className="text-gray-400">{property}: </span>{" "}
      <span className="font-semibold">{value}</span>
    </p>
  );
}

function VehiclePage() {
  const [editPhoto, setEditPhoto] = useState(false);

  return (
    <main className="m-6 bg-white py-6 px-20 shadow-md">
      {/* <VehicleForm /> */}

      <h1 className="font-semibold text-2xl my-8"> Tesla Electric X </h1>

      <section className="px-10">
        {editPhoto ? (
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Vehicle Photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img
              src="https://images.hindustantimes.com/auto/img/2021/06/15/600x338/WhatsApp_Image_2021-02-10_at_15.31.09_1615966496207_1618140882750_1623760189517.jpg"
              alt=""
              className="rounded"
            />
          </div>
        )}

        <hr className="border my-8" />

        <VehicleForm />
      </section>
    </main>
  );
}

export default VehiclePage;
