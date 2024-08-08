import MarrerosoftwareCompanys from "../images/MarrerosoftwareCompanys.png"
import "../hojasEstilo/menu.css"
import menu from "../images/menu.png"
import BotonDesplegables from "./botonDesplegables"
import Carrusel2 from "./carrusel2"
import { Link } from "react-router-dom"
import BotonSelvicio from "./botonSelvicio"

export default function Menu(){
    return (
      <>
      <Carrusel2 />
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-Toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <img src={menu} alt="" className="img-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbar-Toggler">
            <Link className="navbar-brand" to={"/"}>
              <img src={MarrerosoftwareCompanys} alt="logo" className="logo" />
            </Link>
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link className="nav-link " aria-disabled="true" to={"/"}>inicio</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link"><BotonDesplegables /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true" ><BotonSelvicio nombre={"selvicio"}/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true" ><BotonSelvicio nombre={"contacto"}/></a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
     
      </>
    )
}