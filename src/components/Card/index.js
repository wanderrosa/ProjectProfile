import "./cards.css";
const Card = (props) => {
  return (
    <div className="boxcard">
      <div className="navbar">
        <h3>{props.titles}</h3>
      </div>
      <div className="cardinfo">
        <img src={props.imgcard} alt={props.imgdescription}></img>
        <div className="cardtext">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
