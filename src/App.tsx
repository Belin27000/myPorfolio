import './App.css'
import Footer from './components/Footer'
import Heading from './components/Heading'
import data from './assets/data/data.json'
import About from './components/About';
import Project from './components/Project';
import DevStack from './components/DevStack';
import ScrollToTop from './components/ScrollButton/ScrollToTop';
// import ScrollToTop from './components/ScrollButton/ScrollToTop'


function App() {
  const devData = data.DEV
  const projectData = data.PROJECT_LIST
  console.log(projectData);


  return (
    <>
      <div className=' bg-white dark:bg-black text-center flex flex-col h-full justify-between'>
        <Heading title={'Conseil & Tech'} />
        <About data={devData} />
        <Project projectData={projectData} />
        <DevStack data={devData} />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  )
}

export default App
