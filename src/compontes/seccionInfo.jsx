import f1 from "../images/f1.svg"
import f2 from "../images/f2.svg"
import info from "../images/info.png"
import "../hojasEstilo/seccionInfo.css"

export default function SeccionInfo(){
    return (
    <section className="info">
        <div className="info-content container">
            <div className="info-tex">
                <p>los mejores platillo</p>
                <h2>informacion</h2>
                <div className="info-sect">
                    <div className="info-1">
                        <img src={f1} alt="foto" />
                        <div className="info-2">
                            <h3>loren</h3>
                            <p>info2-Lorem ipsum dolor sit amet consectetur,</p>
                        </div>
                        
                    </div>
                    <div className="info-1">
                        <img src={f2} alt="" />
                        <div className="info-2">
                            
                            <h3>loren</h3>
                            <p>info2-Lorem ipsum dolor sit amet consectetur,</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="info-img">
               <img src={info} alt="foto" />
            </div>
        </div>

    </section>
    )
}