import { Link } from "react-router-dom"

import Batatinha from "/Users/mariaalm/Training/react-training/CRECHEBATATINHA/creche_batatinha/creche-batatinha/src/assets/batatinha.png"
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <header>
            <nav>
                <Link to="/" className="batatinha">
                    <img src={Batatinha} id="img-batatinha" alt="logo"/>
                    <div>
                        <h1 id="creche-title">Creche</h1>
                        <h1 id="batatinha-title">Batatinha</h1>
                    </div>          
                </Link>
                <ul>
                    <li className="button-nav">
                        <Link to="/lista"><button id="button-lista">Ver lista de Miaus</button></Link>
                    </li>
                    <li className="button-nav">
                        <Link to="/cadastro"><button id="button-cadastro">Cadastrar Miau</button></Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default NavBar
