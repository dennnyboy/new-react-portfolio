import Contact from "./components/ContactMe/Contactme";
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import AboutMePage from "./components/Aboutme/About";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <div className="sections">
        <Intro />
        <AboutMePage />
        <Skills />
        <ProductList />
        <Contact />
      </div>
    </div>
  );
}

export default App;
