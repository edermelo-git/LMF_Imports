import "./Navbar.css";
import logo from "../assets/logosite.png";


const Navbar = () => {
    return (

        <header className="header">
            <a href="/" className="logo"> <img src={logo} alt="Logo do site" /> </a>

            <nav className="navbar">
                <a href="/">Inicio</a>
                <a href="/">Modelos</a>
                <a href="/">Sobre</a>
                <a href="/">Entre em contato</a>
            </nav>


        </header>

    )
}

export default Navbar;