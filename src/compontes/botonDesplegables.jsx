import { Link } from "react-router-dom"

export default function BotonDesplegables(){
    return (
   <div class="dropdown contendor">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      menu
      </button>
      <ul class="dropdown-menu">
        <li><Link class="dropdown-item" to={"/hamberguer"}>hamburguesa</Link></li>
        <li><Link class="dropdown-item" to={"/tacos"}>tacos</Link></li>
        <li><Link class="dropdown-item" to={"/desayuno"}>desayuno</Link></li>
     </ul>
</div>
    )

}