
import "./cardsprojetos.css";
const CardProjetos = (props) => {
  return (

      <div className="boxprojeto limite">
        <div className="projetotexto">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
        <a href={props.link} rel="noreferrer" target="_blank">
          <img src={props.img} alt={props.imgdescription} />
        </a>{" "}
      </div>

  );
};
export default CardProjetos;
