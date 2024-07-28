import {useParams, useNavigate } from "react-router-dom"
import { tacos } from "../containerProduct/tacos";
import "../hojasEstilo/productScrem.css"


export default function TacosScrem() {
  const back = useNavigate();
  const {name} = useParams();
  const producto = tacos.find((x) => x.name === name);
   return (
    <>
        <div className="item-screm">
            <div className="row g-0">
                <div className="col-md-6">
                   <img src={producto.img} alt="img" className="img-product" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                      <h4>{producto.name}:</h4>
                      <p className="descripcio">{producto.descripcio}.</p>
                      <p className="precio">${new Intl.NumberFormat().format(producto.precio)}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => back(-1)}>back </button>
        </div>
    </>
        
  );
}