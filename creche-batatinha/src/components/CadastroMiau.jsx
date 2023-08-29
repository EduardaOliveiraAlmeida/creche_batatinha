import { Link } from "react-router-dom"
import Miau from "../assets/miau.png"
import "./CadastroMiau.css"


const Cadastro = () => {
  return (
    <div className="cadastro-body">
            <h1 id="cadastro-title" >Cadastro de um novo Miau</h1>
            <img src={Miau} id="img-miau" alt="logo miau" />
            <label>
                <input className="cadastro-form" type="text" name="name" placeholder="Nome do(a) Miau"/>
            </label>
            <label>
                <input className="cadastro-form" type="text" name="name" placeholder="Nome da pessoa dona"/>
            </label>
            <div className="cadastro-button">
                <Link to="/"><button id="cadastro-button-cancela">Cancelar cadastro</button></Link>
                <Link to="/lista"><button id="cadastro-button-salva">Salvar dados</button></Link>
            </div>
    </div>
  )
}

export default Cadastro
