import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";

export default function Desayuno() {
    const [data,setData]=useState([]);
    useEffect(()=>{
      axios("desayuno.json").then((res)=>setData(res.data));
    },[]);
  return data.map((product)=>{
    return (
        <div className="container-producto" key={product.id}>
        <div className="item">
          <img src={product.img} alt="img-product" className="img-product" />
          <div className="info-product">
              <h4>{product.nombre}</h4>
              <p className="descripcio">{product.descripcio}</p>
              <p className="precio">${new Intl.NumberFormat().format(product.precio)}</p>
          </div>
        </div>
     </div>
    )
  })
}
