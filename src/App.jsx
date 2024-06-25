import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './components/Menu';
import About from './components/About';
import Highlights from './components/Highlights';
import Publications from './components/Publications';
import CV from './components/CV';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer  from './components/Footer';
import Research  from './components/Research';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
// Then register the languages you need
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.highlightAll();

function App() {  
  return (
    <Container fluid className="bg-gradient">
      {/* bg-body-tertiary */}
      <Menu />
      <About/>
      <Highlights />
      <Research />
      <Publications />
      <CV />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App
