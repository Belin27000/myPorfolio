import './App.css'
import Footer from './components/Footer'
import Heading from './components/Heading'
import data from './assets/data/data.json'
import About from './components/About';


function App() {
  const devData = data.DEV

  return (
    <>
      <div className=' bg-white dark:bg-black text-center flex flex-col h-full justify-between'>
        <Heading title={'Conseil & Tech'} />
        <About data={devData} />
        <Footer />
      </div>
    </>
  )
}

export default App
