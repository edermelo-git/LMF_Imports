import "./Section1.css";
import lmf_logo from "../assets/lmf_led.png";
import iphone_17_pro from "../assets/iphone_17_pro.png";

const Section1 = () => {
    const handleClick = () => {
        window.open(
          'https://wa.me/5511941326887?text=Ol%C3%A1%20vim%20pelo%20site%20LMF%20Imports!%20%0A',
          '_blank'
        );
    };

    return (
        <div className="container">
            <a href="/" className="lmf-led">
                <img src={lmf_logo} alt="Logo da LMF" />
            </a>
            <p className="description-section1">
                Conheça nosso serviço exclusivo de importação com qualidade garantida.<br />
                Mais de 250 pedidos realizados com sucesso! iPhones novos e semi-novos disponíveis para você.<br />
                Solicite já seu orçamento no WhatsApp ou Direct.
            </p>
            <button className="contact-button" onClick={handleClick}>
                Entre em contato!
            </button>
            <a href="/" className="iphone-pro-17">
                <img src={iphone_17_pro} alt="Iphone pro 17 section" />
            </a>
        </div>
    );
};

export default Section1;
