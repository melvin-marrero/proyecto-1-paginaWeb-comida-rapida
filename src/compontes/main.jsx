import hoja from "../images/hoja.png"
import "../hojasEstilo/main.css"
import { Link } from "react-router-dom"

export default function Main(){
    return (
    <main className="product-menu">
        <div >
            <div className="producto">
                <h2 className="title">menu</h2>
                <img src={hoja} alt="hoja" className="hoja" />
            </div>
            <div className="menu-nav" id="menu">
            
                <Link to={"/hamberguer"} className="tab">hamburguesa</Link>
                <Link to={"/tacos"} className="tab">tacos</Link>
                <Link to={"/desayuno"} className="tab">desayuno</Link>
                
            </div>
           
        </div>

        
    </main>
    )
}