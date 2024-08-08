import MarrerosoftwareCompanys from "../images/MarrerosoftwareCompanys.png"
import s1 from "../images/s1.svg"
import s2 from "../images/s2.svg"
import s3 from "../images/s3.svg"
import "../hojasEstilo/footer.css"

export default function Footer(){
    return (
    <footer> 
        <div className="footer container">   
        <img src={MarrerosoftwareCompanys} alt="logo" className="logo-2"/>
        <div className="link">
            <h4>lorem</h4>
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
        </div>
        <div className="link">
            <h4>lorem</h4>
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
        </div>
        <div className="link">
            <h4>lorem</h4>
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
        </div>
        <div className="link">
            <h4>Redes sociales</h4>
            <div className="socials">
                <a href="https://www.facebook.com/" className="social">
                    <img src={s1} alt="foto" />
                </a>
                <a href="https://twitter.com/?lang=es" className="social">
                    <img src={s2} alt="img" className="icon"/>
                </a>
                <a href="https://www.instagram.com/" className="social">
                    <img src={s3} alt="foto" />
                </a>
            </div>
        </div>
        </div>
        <div className="dato">
          <p>
          melvin marrero desarrollador web (2024).&#169;
         </p>  
        </div>
    </footer>
        
        
    )
}