import React from "react";
import BookingItem from "./BookingItem";

function BookingsList({ bookings }) {
  return (
    <section className="mt-8">
      {Array.from({ length: 5 }).map((_, idx) => (
        <BookingItem id={idx} />
      ))}
    </section>
  );
}

export default BookingsList;
