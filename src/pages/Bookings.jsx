import React from "react";
import CustomTab from "../components/global/CustomTab";
import BookingsList from "../components/pages/bookings/BookingsList";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

function Bookings() {
  return (
    <main className="m-6 bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold"> Bookings </h1>

          <div className="flex items-center gap-x-4 font-semibold text-gray-500 mt-4">
            <CustomTab title="All" />
            <CustomTab title="Completed" />
            <CustomTab title="Cancelled" />
            <CustomTab title="Postponed" />
          </div>
        </div>
        {/* Create new booking */}
        <Link to="/bookings/new">
          <button className="px-4 py-2 bg-primary text-white rounded shadow-md flex items-center gap-x-2">
            {" "}
            <PlusIcon className="h-5 w-5 font-bold" />
            New Booking{" "}
          </button>
        </Link>
      </div>
      <BookingsList />
    </main>
  );
}

export default Bookings;
