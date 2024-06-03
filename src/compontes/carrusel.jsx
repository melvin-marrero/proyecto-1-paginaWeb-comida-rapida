import img1 from "../images/img1.png"
import carrusel0 from "../images/carrusel0.webp"
import imagenCarrusel1 from "../images/imagenCarrusel1.jpg"
import "../hojasEstilo/carrusel.css"

export default function Carrusel(){
    return (
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="foto" />
    </div>
    <div className="carousel-item">
      <img src={carrusel0} className="d-block w-100" alt="foto" />
    </div>
    <div className="carousel-item">
      <img src={imagenCarrusel1} className="d-block w-100" alt="" />
    </div>
  </div>
</div>
    )
}