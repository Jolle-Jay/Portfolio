import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Utbildningar from './sections/Utbildningar';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  return (
    <>

      <ScrollIndicator />
      <div className=" relative max-w-5xl mx-auto px-4">

        <div id="hero">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Projects />

        </div>

        <div id="skills">
          <Skills />

        </div>

        <div id="utbildningar">
          <Utbildningar />

        </div>

      </div>
    </>
  );
}

export default App;



