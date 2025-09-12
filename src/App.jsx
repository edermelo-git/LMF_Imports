import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Section1/>
      </main>

      <Footer />
    </div>
  );
};

export default App;