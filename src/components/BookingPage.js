import BookingForm from "./BookingForm";

function BookTable() {

  return (
    <div className="BookPage">
      <header className="BP-left">
        <div className="Overlay">
          <h2>Hi, Let's reserve a table</h2>
        </div>
      </header>
      <div className="BP-right">
        <BookingForm />
      </div>
      
    </div>
  );
}

export default BookTable;