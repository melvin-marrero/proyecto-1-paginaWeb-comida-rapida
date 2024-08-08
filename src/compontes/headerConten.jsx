
import "../hojasEstilo/headerConten.css"
import Carrusel from "./carrusel"

export default function HeaderConten(){
    return (
        <div className="container header-content"id="contenedor1" >
            <div className="header-tex">
                <h1>Delicious fastt food</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis expedita ea fuga sint, est saepe, dicta quis cum iste, 
                    autem neque fugiat aut a accusamus suscipit eligendi quibusdam? Sapiente, culpa?
                </p>
            </div>
            <div className="container header-carrusel">
              <Carrusel />
            </div>

        </div>
    )
}