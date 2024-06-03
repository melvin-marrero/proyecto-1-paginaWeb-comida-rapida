import DefaulLayout from "./defaulLayout";
import Hamburguer from "./hamburguer";
import Main from "./main";



export  default function ContainerHamburguer() {
  return (
    <DefaulLayout>
       <Main />
      <div className='container-producto'>
         <Hamburguer />
      </div>
    </DefaulLayout>
  )
}
