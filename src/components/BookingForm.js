import { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [noGuests, setNoGuests] = useState("");
  const [occasion, setOccasion] = useState("Select ocion");

  return (
    <form>
      <p>Fill the form</p>
      <div>
        <label for="res-date">Date</label>
        <input type="date" id="res-date" value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }} />
      </div>
      <div>
        <label for="res-time">Time</label>
        <select id="res-time" value={time} 
        onChange={(e) => {
          setTime(e.target.value);
        }}>
          <option value="">Select time</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
      </div>
      <div>
        <label for="guests">Number of guests</label>
        <input value={noGuests} 
        onChange={(e) => {
          setNoGuests(e.target.value);
          }} type="number" placeholder="1" min="1" max="10" id="guests" />
      </div>
      <div>
        <label for="occasion">Occasion</label>
        <select id="occasion" value={occasion} 
        onChange={(e) => {
          setOccasion(e.target.value);
        }}>
          <option value="">Select occasion</option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
          <option value="graduation">Graduation</option>
          <option value="others">Others</option>
        </select>
      </div>
      <button type="submit">
        Make Reservation
      </button>
    </form>
  );
}

export default BookingForm;