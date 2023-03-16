
import { Link } from 'react-router-dom';
import './top.css'
export function Topo() {
  return (
    <section className='limite'>
      <div className="topo">
        <nav>
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'/Projetos'}>Meus Projetos</Link></nav>
        {/* <button>Dark Mode</button> */}
      </div>
    </section>
  );
}
