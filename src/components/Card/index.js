import "./cards.css";
const Card = (props) => {
  return (
    <div className="boxcard">
      <div className="navbar">
        <h3>{props.title}</h3>
      </div>
      <div className="cardinfo">
        <img src={props.img} alt='JKLJ'></img>
        <div className="cardtext">
          <p>{props.texto}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
