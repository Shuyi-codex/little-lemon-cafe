import Food from "../assets/restaurantfood.jpg";
import BookTable from './BookingPage';
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
        <button>Reserve a Table</button>
      </article>
      <article className="Hero-right">
        <img src={Food} alt="An image showing " style={imageStyle}/>
      </article>
    </section>
  );
}

export default Hero;
