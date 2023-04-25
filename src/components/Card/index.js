import "./cards.css";
const Card = (prop) => {
  return (
    <div className="boxcard">
      <div className="navbar">
        <h2>{prop.titles}</h2>
      </div>
      {prop.text}
    </div>
  );
};
export default Card;
