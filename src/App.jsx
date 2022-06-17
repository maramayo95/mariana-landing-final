import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Nav from './Components/NavBar/NavBar';
import Services from "./Components/ServicesProduct/Services";
import FormContact from "./Components/FormContact/FormContact";
import CarouselComponent from "./Components/CarouselComponent/CarouselComponent";
import {Helmet} from 'react-helmet';

function App() {

  return (
    <section className="text-center">
      {/* SEO del sitio web */}
      <Helmet>
          <title>Mariana Battistella</title>     
          <meta name="description" content="Mi nombre es mariana battistela, soy diseñadora gráfica y me dedico al diseño de embalajes y bolsas para diversos productos" />
          <meta name="keywords" content="diseño , packaging , kraft , totebags "/>
      </Helmet>
      {/* componentes */}
      <Nav/> {/* componente Nav */}
      <CarouselComponent/> {/*componente sección Home-carousel*/}
      <About/> {/*componente sección Sobre mi */}
      <Services/> {/*componente sección servicios */}
      <FormContact/> {/*componente sección Contacto */}
      <Footer/> {/*componente footer */}
    </section>
  )
}

export default App
