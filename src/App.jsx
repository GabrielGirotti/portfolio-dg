import { BrowserRouter as Router } from "react-router-dom";

import Bio from "./components/Bio/Bio";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar/NavBar";
import Logos from "./components/Logos/Logos";
import Medias from "./components/Medias/Medias";
import Proyectos from "./components/Proyectos/Proyectos";
import Videos from "./components/Videos/Videos";

function App() {
  return (
    <>
      <Router>
        <NavBar />
      </Router>

      <Header />
      <Bio />
      <Logos />
      <Videos />

      <Medias />

      <Proyectos />
      <Footer />
    </>
  );
}

export default App;
