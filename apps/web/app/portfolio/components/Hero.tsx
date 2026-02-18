import Chatbot from './Chatbot'
export default function Hero() {
    return (
        <section id="hero-section">
            <h1 className="header-1">hi, my name is amanda li</h1>
            <Chatbot />
            <div style={{ height: '2rem' }}></div>
            <div className="large-arrow-divider">
                <a href="#about-section" aria-label="Navigate to About Me Section">
                    <svg className="large-arrow" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="4.24264" y1="4" x2="29" y2="28.7574" strokeWidth="6" strokeLinecap="round"/>
                        <line x1="3" y1="-3" x2="38.0122" y2="-3" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 25 29)" strokeWidth="6" strokeLinecap="round"/>
                        <line x1="4.24264" y1="25" x2="29" y2="49.7574" strokeWidth="6" strokeLinecap="round"/>
                        <line x1="3" y1="-3" x2="38.0122" y2="-3" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 25 50)" strokeWidth="6" strokeLinecap="round"/>
                    </svg>
                </a>
            </div>
        </section>
    )
}
