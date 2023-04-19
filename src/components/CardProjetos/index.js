import WindowsSplit from "../WindowsSplit";
import "./cardsprojetos.css";
const CardProjetos = (props) => {
  return (
    <WindowsSplit>
      <div className="boxprojeto">
        <div className="projetotexto">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <a href={props.link} rel="noreferrer" target="_blank">
          <img src={props.img} alt={props.imgdescription} />
        </a>{" "}
      </div>
    </WindowsSplit>
  );
};
export default CardProjetos;
