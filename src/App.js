import './css/main.css';
import NavBar from "./components/navbarComponents/NavBar";
import HeroSection from "./components/heroSection/HeroSection";
import Projects from "./components/myProjects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/about/AboutMe";


function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
