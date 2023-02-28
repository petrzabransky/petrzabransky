import "./styles/container.scss";
import "./App.scss";
import Hero from "./components/block/Hero";
import Reference from "./components/block/Reference";
import About from "./components/block/About";
import Contact from "./components/block/Contact";
import Technology from "./components/block/Technology";
import Header from "./components/partial/header/Header";
import Footer from "./components/partial/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="reference"><Reference /></section>
        <section id="technology"><Technology /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
