import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from "../pages/Principal";
import Projetos from '../pages/projetos';
const Rotas = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/Projetos" element={<Projetos/>}/>
        </Routes>
    </Router>

    
);
export default Rotas
