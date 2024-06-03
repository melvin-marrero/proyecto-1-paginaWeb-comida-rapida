import DefaulLayout from "./defaulLayout";
import Main from "./main";
import Tacos from "./tacos";




export  default function ContainerTacos() {
  return (
    <DefaulLayout>
      <Main />
      <div className='container-producto'>
         <Tacos />
      </div>
    </DefaulLayout>
  )
}