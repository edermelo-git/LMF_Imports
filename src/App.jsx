import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <h1>Bem-vindo à LMF Imports</h1>
      </main>

      <Footer />
    </div>
  );
};

export default App;