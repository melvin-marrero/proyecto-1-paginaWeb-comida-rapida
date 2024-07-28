
import DefaulLayout from "./defaulLayout";
import Main from "./main";
import { Link } from "react-router-dom";
import { tacos } from "../containerProduct/tacos";


export default function Tacos() {
    return (
      <DefaulLayout>
        <Main />
      <div className="container-fluid">
         <div className="row row-cols-1 row-cols-md-4 g-3">
            {tacos.map((item)=>{
              return (
                <div key={item.id} className="item">
                   <Link to={`${item.name}`}><img src={item.img} alt="img-product" className="img-product" /></Link>
                   <div className="info-product">
                      <h4>{item.name}</h4>
                      <p className="descripcio">{item.descripcio}</p>
                      <p className="precio">${new Intl.NumberFormat().format(item.precio)}</p>
                    </div>
                </div>
              )
            })}
         </div>
      </div>
      </DefaulLayout>
    )
}
