import Card from "../../components/Card";

import "./hability.css";
const Hability = () => {
  const Array = [
    {
      title: "html",
      texto:
        "Tags Básicas, Meta Tags, Listas, Tábelas, Html Semãntico, Formulário.",
      img: "/assets/htmlcard.png",
    },
    {
      title: "css",
      texto:
        "Propriedades, Seletores, Box Model, Flexbox, Pseudo-Classes, Pseuso-Elementos.",
      img: "/assets/csscard.png",
    },
    {
      title: "javascript",
      texto:
        "Variaveis e Operadores, Objetos, Estruturas Condicionais, Estruturas Repetição, Inputs e Arrays, Funções.",
      img: "/assets/javacard.png",
    },
    {
      title: "react js",
      texto: "Componentes, State Hook, Eventos, Rotas, Props, Deploy.",
      img: "/assets/reactcard.png",
    },
    {
      title: "git",
      texto:
        "Versionamento codigo, Criação PullRequest, Manipulação Branchs, Deploy.",
      img: "/assets/gitcard.png",
    },
  ];

  return (
    <section id="Habilidade" className="secaohability limite">
      <section className="boxcardshabilidades">
        <div className="carrosel">
          {Array.map((card) => {
            return (
              <Card title={card.title} texto={card.texto} img={card.img} />
            );
          })}
        </div>
      </section>
      <div className="boxinfohabilidades">
        <h2 className="textwhite">Habilidades</h2>
        <p>
          Atualmente estou aprimorando meus conhecimentos em React JS, estudando
          a documentação de hooks buscando agregar mais agilidade e estrutura
          aos meus projetos. Em paralelo estou aprendendo sobre animações e como
          deixar minha pagina mais interativa, já para o futuro estou iniciando
          meus estudos mobile para me consolidar como desenvolvedor Front-End em
          ambas as plataformas
        </p>
      </div>
    </section>
  );
};
export default Hability;
// {
//   title: "Conhecimento e Planos futuro",
//   texto: ".",
//   img:''
// },
