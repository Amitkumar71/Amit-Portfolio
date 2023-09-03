import './App.css';
import About from './components/About';
import Skills from './components/skills';
import ContactMe from './components/contact';
import Projects from './components/Projects';
import  Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
 