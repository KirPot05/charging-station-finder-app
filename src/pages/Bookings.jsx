import React from "react";
import CustomTab from "../components/global/CustomTab";
import BookingsList from "../components/pages/bookings/BookingsList";

function Bookings() {
  return (
    <main className="m-6 bg-white p-6 shadow-md">
      <h1 className="text-4xl font-semibold"> Bookings </h1>

      <div className="flex items-center gap-x-4 font-semibold text-gray-500 mt-4">
        <CustomTab title="All" />
        <CustomTab title="Completed" />
        <CustomTab title="Cancelled" />
        <CustomTab title="Postponed" />
      </div>

      <BookingsList />
    </main>
  );
}

export default Bookings;
