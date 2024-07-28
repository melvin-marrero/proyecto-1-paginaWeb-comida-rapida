import {useParams, useNavigate } from "react-router-dom"
import { hambergue } from "../containerProduct/hambergue";
import "../hojasEstilo/productScrem.css"


export default function HambergueScrem() {
  const back = useNavigate();
  const {nombre} = useParams();
  const producto = hambergue.find((x) => x.nombre === nombre);
   return (
    <>
      <div className="item-screm">
          <div className="row g-0">
              <div className="col-md-6">
                <img src={producto.img} alt="img" className="img-product" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                    <h4>{producto.nombre}:</h4>
                    <p className="descripcio">{producto.descripcio}.</p>
                    <p className="precio">${new Intl.NumberFormat().format(producto.precio)}</p>
                </div>
              </div>
          </div>
            <button onClick={() => back(-1)}>atra</button>
      </div>
    </>
    
  );
}