import "./Navbar.css";
import logo from "../assets/logosite.png";


const Navbar = () => {
    return (

        <header className="header">
            <a href="/" className="logo"> <img src={logo} alt="Logo do site" /> </a>

            <nav className="navbar">
                <a href="/">Início</a>
                <a href="/">Modelos</a>
                <a href="/">IPads</a>
                <a href="/">MacBook</a>
                <a href="/">Sobre</a>
                <a href="/">contato</a>
            </nav>


        </header>

    )
}

export default Navbar;