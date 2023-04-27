import { useState } from "react";
import Card from "../../components/Card";

import "./hability.css";
const Hability = () => {
  const [IdArray, setIdArray] = useState("0");
  const Array = [
 {
      title: "html",
      texto: "Tags Básicas, Meta Tags, Listas, Tábelas, Html Semãntico, Formulário.",
      img:'/assets/htmlcard.png'
    },
    {
      title: "css",
      texto: "Propriedades, Seletores, Box Model, Flexbox, Pseudo-Classes, Pseuso-Elementos.",
      img:'/assets/csscard.png'
    },
    {
      title: "javascript",
      texto: "Variaveis e Operadores, Objetos, Estruturas Condicionais, Estruturas Repetição, Inputs e Arrays, Funções.",
      img:'/assets/javacard.png'
    },
    {
      title: "react js",
      texto: "Componentes, State Hook, Eventos, Rotas, Props, Deploy.",
      img:'/assets/reactcard.png'
    },
    {
      title: "git",
      texto: "Versionamento codigo, Criação PullRequest, Manipulação Branchs, Deploy.",
      img:'/assets/gitcard.png'
    },
  ];
  function trocaarray(i) {
    const id = i;
    if (IdArray !== id) {
      setIdArray(id);
    }
  }
  return (
    <section id="Habilidade" className="secaohability limite">
      <div className="boxhability">
         <h2 className="textwhite">Habilidades</h2>
        <section className="boxcardshability">
       <Card titles={Array[IdArray].title} text={Array[IdArray].texto} imgcard={Array[IdArray].img} />
          <div className="navmenuhability">
            <button onClick={() => trocaarray("0")}>html</button>
            <button onClick={() => trocaarray("1")}>css</button>
            <button onClick={() => trocaarray("2")}>javascripit</button>
            <button onClick={() => trocaarray("3")}>react js</button>
            <button onClick={() => trocaarray("4")}>git</button>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Hability;
// {
//   title: "Conhecimento e Planos futuro",
//   texto: "Atualmente estou aprimorando meus conhecimentos em React JS, estudando a documentação de hooks buscando agregar mais agilidade e estrutura aos meus projetos. Em paralelo estou aprendendo sobre animações e como deixar minha pagina mais interativa, já para o futuro estou iniciando meus estudos mobile para me consolidar como desenvolvedor Front-End em ambas as plataformas.",
//   img:''
// },