export default function Skills() {
    return (
        <section id="skills-section">
            <div style={{ height: '15rem' }}></div>
            <h2 className="header-2">my skills</h2>
            <div className="row-flex-inline">
                <p className="body-small-bold">Languages, Tools, & Frameworks:</p>
                <p className="body-small">
                    Python, Java, HTML/CSS/JS, Assembly, R, Git, Github, Figma
                </p>
            </div>
            <div className="row-flex-inline">
                <p className="body-small-bold">Other:</p>
                <p className="body-small">
                    Problem-solving, critical thinking, teamwork/collaboration, communication, organization,
                    leadership, creativity, adaptability and continuous learning
                </p>
            </div>
            <div className="row-flex">
                <p className="body">to learn more about me, </p>
                <a href="/pdfs/resume.pdf" target="_blank" rel="noopener noreferrer" type="application/pdf" aria-label="Link to My Resume">
                    <p className="link-text">view my resume here</p>
                </a>
            </div>
            <div className="small-arrow-divider">
                <a href="#projects-section" aria-label="Navigate to Projects Section">
                    <svg className="small-arrow" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
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
