import CardProjetos from "../../components/CardProjetos";
import "./projetos.css";

const Projetos = () => {
  return (  
    <section id='Projetos'>
      <h2>
        Meus projetos
      </h2>
      <CardProjetos
        title="Sorveteria"
        text=" Um belo layout oferecido pela DevMedia, abordando conceitos de SPA em
        navegação, codigo responsivo e componentização estrutural do projeto."
        link="https://wr-sorveteria.vercel.app"
        img="assets/sorveteria.png"
        imgdescription="wr-sorveteria"
      />

      <CardProjetos
        title="Loja de Óculos"
        text="Nesta pagina as principais habilidades desenvolvidas foram a
        resposividade, e manipulação de flexbox. Uma linda loja de óculos
        promovendo produtos e serviços de forma clara e objetiva."
        link="https://wr-loja-de-oculos.vercel.app/"
        img="assets/oculos.png"
        imgdescription="wr-loja-de-oculos"
      />
    </section>
  );
};
export default Projetos;
