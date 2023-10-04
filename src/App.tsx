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
// import ScrollToTop from './components/ScrollButton/ScrollToTop'


function App() {
  const devData = data.DEV
  const projectData = data.PROJECT_LIST
  console.log(projectData);


  return (
    <>
      <div className=' bg-white dark:bg-black text-center flex flex-col h-full justify-between'>
        <Heading />
        <About data={devData} />
        <Project projectData={projectData} />
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
