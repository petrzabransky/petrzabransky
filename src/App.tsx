import React from 'react';
import './App.scss';
import Layout from './components/layout/Layout';
import "./styles/container.scss";
import Hero from './components/block/Hero';
import Reference from './components/block/Reference';
import About from './components/block/About';
import Contact from './components/block/Contact';


function App() {
  return (
    <Layout>
      <>
        <Hero />
        <Reference />
        <About />
        <Contact />



      </>
    </Layout>
  );
}

export default App;
