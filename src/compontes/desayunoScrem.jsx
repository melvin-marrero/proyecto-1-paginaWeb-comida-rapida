import {useParams, useNavigate } from "react-router-dom"
import { desayuno } from "../containerProduct/desayuno";
import "../hojasEstilo/productScrem.css"


export default function DesayunoScrem() {
  const back = useNavigate();
  const {nombre} = useParams();
  const producto = desayuno.find((x) => x.nombre === nombre);
   return (
      <>
        <div className="item-screm">
            <div className="row g-0">
                <div className="col-md-6 col-sm-12">
                  <img src={producto.img} alt="img" className="img-product" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="card-body">
                    <h4>{producto.nombre}:</h4>
                    <p className="descripcio">{producto.descripcio}.</p>
                    <p className="precio">${new Intl.NumberFormat().format(producto.precio)}</p>
                  </div>
                </div>
            </div>
            <button onClick={() => back(-1)}>back</button>
        </div>
      </>
      );
    }