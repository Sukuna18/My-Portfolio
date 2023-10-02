import './App.css'
import Navbar from './sections/Navbar.js'
import Intro from './sections/Intro.js'
import About from './sections/About.js'
import Resume from './sections/resume/Resume.js'
import Footer from './sections/Footer.js'
import ContactBar from './sections/ContactBar.js'
import Projects from './sections/resume/Projects.js'

function App() {
  return (
    <div className='bg-gray-50 text-gray-800 dark:bg-gray-800'>
      <Navbar />
      <div className='flex flex-col gap-20 px-5 md:px-10 lg:px-16 xl:px-32'>
        <Intro />
        <About />
        <Resume />
        <Projects />
        <ContactBar />
      </div>
      <Footer />
    </div>
  )
}

export default App
