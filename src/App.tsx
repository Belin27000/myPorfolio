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
// import { withNamespaces } from 'react-i18next'

import { useTranslation } from 'react-i18next'
// import { useEffect } from 'react';

function App() {

  const { t } = useTranslation();

  // useEffect(() => {
  //   const lng = navigator.language;
  //   i18n.changeLanguage(lng)
  // }, [])

  // const lng = navigator.language

  const devData = data.DEV
  // const projectData = data.PROJECT_LIST


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
