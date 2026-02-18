
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container">
                <main id="main-content">
                    <div style={{ height: '2rem' }}></div>
                    <Hero />
                    <div style={{ height: '50rem' }}></div>
                    <About />
                    <div style={{ height: '50rem' }}></div>
                    <Skills />
                    <div style={{ height: '50rem' }}></div>
                    <Projects />
                    <div style={{ height: '50rem' }}></div>
                    <Contact />
                    <div style={{ height: '2rem' }}></div>
                </main>
            </div>
        </>
    )
}