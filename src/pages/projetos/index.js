import { Topo } from "../../components/Top";
import Footer from "../../components/Footer";
import "./projetos.css";

const Projetos = () => {
  return (
    <section className="limite">
      <main>
        <Topo />
        <div className="boxprojetos">
          <div className="boxcards">
            <div className="cardprojetos">
              <h3>Sorveteria</h3>
              <p>
                Um belo layout oferecido pela DevMedia, abordando conceitos de
                SPA em navegação, codigo responsivo e componentização estrutural
                do projeto.
              </p>
            </div>
            <a
              href="https://wr-sorveteria.vercel.app/"
              rel="noreferrer"
              target={"_blank"}
            >
              <img src="assets/sorveteria.png" alt="wr-sorveteria" />
            </a>
          </div>
          <div className="boxcards">
            <div className="cardprojetos">
              <h3>Loja de Óculos</h3>
              <p>
                Nesta pagina as principais habilidades desenvolvidas foram a
                resposividade, e manipulação de flexbox. Uma linda loja de
                óculos promovendo produtos e serviços de forma clara e objetiva.
              </p>
            </div>
            <a
              href="https://wr-loja-de-oculos.vercel.app/"
              rel="noreferrer"
              target={"_blank"}
            >
              <img src="assets/oculos.png" alt="wr-loja-de-oculos" />
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </section>
  );
};
export default Projetos;
