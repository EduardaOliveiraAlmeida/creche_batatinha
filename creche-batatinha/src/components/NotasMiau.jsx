import "./NotasMiau.css"
import Miau from "../assets/miau.png"

import { Link } from "react-router-dom"

const NotasMiau = () => {
  return (
    <div className="notas-body">
        <h1 id="notas-title">Ops! Esta página está em construção..</h1>
        <img id="notas-img" src={Miau} alt="Gato página construçao" />
        <Link to="/">
            <button id="notas-button">Voltar para Home</button>
        </Link>
    </div>
  )
}

export default NotasMiau
