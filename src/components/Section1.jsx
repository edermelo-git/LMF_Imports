import "./Section1.css";
import lmf_logo from "../assets/lmf_led.png";

const Section1 = () => {
    return (
        <div className="container">
            <a href="/" className="lmf-led">
                <img src={lmf_logo} alt="Logo da LMF" />
            </a>
            <p className="description-section1">
                Conheça nosso serviço exclusivo de importação com qualidade garantida.<br />
                Mais de 250 pedidos realizados com sucesso! iPhones novos e semi-novos disponíveis para você.<br />
                iPhones novos e semi-novos disponíveis para você.<br/>
                Solicite já seu orçamento no WhatsApp ou Direct.
            </p>
            <button className="contact-button">
                Entre em contato!
            </button>
        </div>
    );
};

export default Section1;
