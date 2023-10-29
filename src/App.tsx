import './App.css'
import Footer from './components/Footer'
import Heading from './components/Heading'
import data from './assets/data/data.json'
import About from './components/About';
import Project from './components/Project';
import DevStack from './components/DevStack';
import ScrollToTop from './components/ScrollButton/ScrollToTop';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import MyCv from './components/MyCv';
import { pdfjs } from 'react-pdf';
import Button from './components/Button/Button';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {


  const devData = data.DEV


  return (
    <>
      <div className=' bg-white dark:bg-black text-center flex flex-col h-full justify-between'>
        <Heading />
        <About />
        <Project />
        <AboutMe />
        <DevStack data={devData} />
        <ContactForm />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  )
}

export default App
