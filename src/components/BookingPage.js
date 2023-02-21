import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";
import { useReducer, useState } from "react";

function BookTable() {

  return (
    <div>
      <h2>Booking Page</h2>
      <p>The user arrives here after clicking on 
        Reservations or Reserve a table link.</p>
      <BookingForm />
    </div>
  );
}

export default BookTable;