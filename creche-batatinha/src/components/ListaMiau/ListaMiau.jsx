import "./ListaMiau.css"

import Gato1 from "../../assets/gato1.jpeg"
import Gato2 from "../../assets/gato2.jpeg"
import Gato3 from "../../assets/gato3.jpeg"
import Gato4 from "../../assets/gato4.jpeg"


import { Link } from "react-router-dom"

const ListaMiau = () => {
  return (
    <div>
        <div className="lista-body">
            <h1 id="lista-title" >Lista de Miaus</h1>  
            <table className="lista-table">
                <tbody>
                    <tr className="lista-tr">
                        <td className="lista-td">
                        <Link to="/notas"><img className="lista-gato-img" src={Gato1} alt='Gato Buzz' /></Link><span>Buzz</span></td>
                        <td><button className="lista-button-notas">Lançar notas</button></td>
                    </tr>
                    <tr className="lista-tr">
                        <td className="lista-td"><Link to="/notas"><img className="lista-gato-img" src={Gato2} alt='Gato Dona' /></Link><span>Dona</span></td>
                        <td><button className="lista-button-notas">Lançar notas</button></td>
                    </tr>
                    <tr className="lista-tr">
                        <td className="lista-td"><Link to="/notas"><img className="lista-gato-img" src={Gato3} alt='Gato Floquinho' /></Link><span>Floquinho</span></td>
                        <td><button className="lista-button-notas">Lançar notas</button></td>
                    </tr>
                    <tr className="lista-tr">
                        <td className="lista-td"><Link to="/notas"><img className="lista-gato-img" src={Gato4} alt='Gato Rafa'/></Link><span>Rafa</span></td>
                        <td><button className="lista-button-notas">Lançar notas</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListaMiau
