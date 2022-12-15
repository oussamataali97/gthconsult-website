import Agrements from "./components/Agrements";
import Apropos from "./components/Apropos";
import Certificats from "./components/Certificats";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Moyen from "./components/Moyen";
import Navbar from "./components/Navbar";
import NosMissions from "./components/NosMissions";
import NosMoyens from "./components/NosMoyens";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Apropos />
      <NosMissions/>
      <NosMoyens/>
      <Moyen/>
      <Certificats/>
      <Agrements/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
