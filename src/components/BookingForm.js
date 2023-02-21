import { useState, useReducer} from "react";
import { fetchAPI, submitAPI } from "./temp.js";

const availableTimes = ["Not selected", "13:00", "15:00", "17:00", "19:00", "21:00", "22:00"];

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE DATE":
      return { ...state, sDate: action.payload, times: state.times=fetchAPI(new Date()) };
    case "HANDLE TIME":
      return { ...state, times: [action.payload] };
      case "reset":
        return initialState;
    default:
      return state;
  }
}

const initialState = {times: availableTimes, sDate:""}

function BookingForm() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [noGuests, setNoGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const clearForm = () => {
    dispatch({type: "reset"});
    setNoGuests("");
    setOccasion("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table Booked");
    submitAPI();
    clearForm();
  }

  const isFormValid = () => {
    return (
      state.sDate !== "" &&
      state.times.length < 2 &&
      noGuests !== "" &&
      occasion !== ""
    );
  }


  return (
    <form onSubmit={handleSubmit}>
      <h3>Book Now</h3>
      <p>Please select options to book </p>

      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="sDate" value={state.sDate}
        onChange={(e) => dispatch({type: "HANDLE DATE", payload: e.target.value}) }></input>
      </div>

      <div>
        <label htmlFor="time">Time</label>
        <select id="time" value={state.times}
        onChange={(e) => dispatch({ type: "HANDLE TIME", payload: e.target.value})}
        >
          {state.times.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="guests">Number of guests</label>
        <input value={noGuests} 
        onChange={(e) => {
          setNoGuests(e.target.value);
          }} type="number" placeholder="1" min="1" max="10" id="guests" />
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
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
      { !isFormValid() ? <p className="FormError">Please select all fields</p> : null}
      <button value="button" disabled={!isFormValid()} type="submit">
        Make Reservation
      </button>
    </form>
  );
}

export default BookingForm;