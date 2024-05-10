import NavBar from "../navbar/NavBar";
import HeroSection from "../heroSection/HeroSection";
import Projects from "../myProjects/Projects";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import AboutMe from "../about/AboutMe";

function Root() {
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

export default Root;
