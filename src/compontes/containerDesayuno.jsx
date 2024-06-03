

import DefaulLayout from "./defaulLayout";
import Desayuno from "./desayuno";
import Main from "./main";




export  default function ContainerDesayuno() {
  return (
    <DefaulLayout>
      <Main />
      <div className='container-producto'>
         <Desayuno />
      </div>
    </DefaulLayout>
  )
}
