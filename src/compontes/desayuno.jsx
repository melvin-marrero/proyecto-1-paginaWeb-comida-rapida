import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import DefaulLayout from "./defaulLayout";
import Main from "./main";

export default function Desayuno() {
    const [data,setData]=useState([]);
    useEffect(()=>{
      axios("desayuno.json").then((res)=>setData(res.data));
    },[]);
    return (
      <DefaulLayout>
        <Main />
      <div className="container-fluid">
         <div className="row row-cols-1 row-cols-md-4 g-3">
            {data.map((product)=>{
              return (
                <div key={product.id} className="item">
                   <img src={product.img} alt="img-product" className="img-product" />
                   <div className="info-product">
                      <h4>{product.nombre}</h4>
                      <p className="descripcio">{product.descripcio}</p>
                      <p className="precio">${new Intl.NumberFormat().format(product.precio)}</p>
                    </div>
                </div>
              )
            })}
         </div>
      </div>
      </DefaulLayout>
    )
}
