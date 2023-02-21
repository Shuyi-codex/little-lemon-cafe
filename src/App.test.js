import { render, fireEvent, screen } from '@testing-library/react';
// import App from './App';
import BookingForm, { state } from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

// test("Show the initial options", () => {
//   render (state);
//   const initialOption = screen.getByText("Not selected")
// })