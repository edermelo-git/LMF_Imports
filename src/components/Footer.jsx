
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Direitos autorais reservados por LMF Imports.</p>
    </footer>
  );
};

export default Footer;