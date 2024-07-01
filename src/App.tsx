import "../styles/App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileMenu from "./components/MobileMenu";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <Header />
      <MobileMenu />
      <main className="space-y-20 lg:space-y-40">
        <Hero />
        <About />
        <Featured />
        <Work />
        <Contact />
        <Footer />
      </main>
      <footer></footer>
    </>
  );
}
