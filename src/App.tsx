import "./App.scss";
import Hero from "./components/block/hero/Hero";
import Reference from "./components/block/reference/Reference";
import Quote from "./components/block/quote/Quote";
import About from "./components/block/about/About";
import Contact from "./components/block/contact/Contact";
import Technology from "./components/block/technology/Technology";
import Header from "./components/partial/header/Header";
import Footer from "./components/partial/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="reference"><Reference /></section>
        <Quote />
        <section id="technology"><Technology /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
