import IMG1 from "../assets/salad.jpg";
import IMG2 from "../assets/bruchetta.svg";
import IMG3 from "../assets/dessert.jpg";

function Highlight() {

  var cardImgStyle = {
    height: 400,
    width: 350,
    borderRadius: 10
  };

  return (
    <section className="Highlights">
      <div className="Highlight-head">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="Highlight-article">
        <article className="Article1">
          <img src={IMG1} alt="Greek Salad" style={cardImgStyle}/>
          <div className="Details">
            <h5>Greek salad <span>$12.50</span></h5>
            <p>The fabulous Greek salad lorem lorem.
              The fabulous meal lorem lorem ip.
              The fabulous meal lorem lorem.
              The fabulous meal ip lorem lorem.
              The fabulous meal lorem ipsum lorem.
            </p>
            <h5><a href="/">Order a delivery $1</a></h5>
          </div>
        </article>
        <article className="Article2">
          <img src={IMG2} alt="A plate of Bruchetta" style={cardImgStyle}/>
          <div className="Details">
            <h5>Greek salad <span>$15.20</span></h5>
            <p>The fabulous Greek salad lorem lorem.
              The fabulous meal lorem lorem ip.
              The fabulous meal lorem lorem.
              The fabulous meal ip lorem lorem.
              The fabulous meal lorem ipsum lorem.
            </p>
            <h5><a href="/">Order a delivery $1</a></h5>
          </div>
        </article>
        <article className="Article3">
          <img src={IMG3} alt="A fanimorous Lemon dessert" style={cardImgStyle}/>
          <div className="Details">
            <h5>Lemon Dessert <span>$6.45</span></h5>
            <p>The fabulous Greek salad lorem lorem.
              The fabulous meal lorem lorem ip.
              The fabulous meal lorem lorem.
              The fabulous meal ip lorem lorem.
              The fabulous meal lorem ipsum lorem.
            </p>
            <h5><a href="/">Order a delivery $1</a></h5>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Highlight;