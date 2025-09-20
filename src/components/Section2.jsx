import "./Section2.css";
import perfil_sobre from "../assets/perfil_sobre.png";

const Section2 = () => {
    return (
        <div className="container2">
            <a href="/" className="perfil-sobre">
                <img src={perfil_sobre} alt="perfil sobre" />
            </a>
        </div>
    );
};

export default Section2;