import './App.css';
import About from './components/About';
import Skills from './components/skills';
import ContactMe from './components/contact';
import Projects from './components/Projects';
import  Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <h1>Contact</h1>
        <h1>Projects</h1>
        <h1>About Me</h1>
      </header>
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
