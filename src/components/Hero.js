import Food from "../assets/restaurantfood.png";
import { Link } from 'react-router-dom';

function Hero() {
  var imageStyle = {
    height: 400,
    width: 350,
    borderRadius: 10
  };

  return (
    <section className="Hero">
      <article className="Hero-left">
        <h1>Little  Lemon</h1>
        <p>Chicago</p>
        <p>We are a family owned Mediterranean 
            restaurant, focused on traditional 
            recipes served with a modern twist.
        </p>
        <Link to="/book-table" className="table-link">Reserve a Table</Link>
      </article>
      <article className="Hero-right">
        <img src={Food} alt=" A server with a tray of food " style={imageStyle}/>
      </article>
    </section>
  );
}

export default Hero;
