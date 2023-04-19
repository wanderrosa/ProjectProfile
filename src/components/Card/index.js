import "./cards.css";
const Card = (props) => {
  return (
    <div className="boxcard">
      <div className="navbar">
        <h2>{props.title}</h2>
      </div>
      {props.children}
    </div>
  );
};
export default Card;
