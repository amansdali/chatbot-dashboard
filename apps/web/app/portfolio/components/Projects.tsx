import Image from 'next/image'

export default function Projects() {
    const projects = [
        {
            id: 'project1',
            href: 'https://github.com/amansdali/amansdali.github.io',
            image: '/images/websiteimg.png',
            title: 'Personal Website (WIP)',
            description: 'A personal website built using html, css, and javascript.',
        },
        {
            id: 'project2',
            href: 'https://github.com/amansdali/Munchables',
            image: '/images/muchablesimg.png',
            title: 'Munchables',
            description: 'Social media app for foodies. Sign up, post recipes, join clubs, follow users, and scroll through a curated feed. Made with Java Swing in a team of 4 for a software development course.',
        },
        {
            id: 'project3',
            href: 'https://github.com/amansdali/Steam-Game-Recommendation-Tool',
            image: '/images/steamimg.png',
            title: 'Steam Game Recommendation Tool',
            description: 'Website that recommends games on Steam based on an algorithm using weighted graphs and trees. Frontend made using HTML/CSS and Streamlit, backend made using Python, in a team of 4 for a computer science course.',
        },
        {
            id: 'project4',
            href: 'https://github.com/amansdali/Exploding-Kittens-Local-Online-Game',
            image: '/images/kittensimg.png',
            title: 'Exploding Kittens Local Online Game',
            description: 'Multiplayer card game based on Exploding Kittens, made using Java. Features networking between four different devices and turn-based action between players. Made in a group of 2 for a high school computer science course.',
        },
        {
            id: 'project5',
            href: 'https://github.com/amansdali/The-Haunted-Forest',
            image: '/images/forestimg.png',
            title: 'The Haunted Forest',
            description: 'Platformer game made using Python for a high school project.',
        },
        {
            id: 'project6',
            href: 'https://github.com/qutch/StoryOfMyLife',
            image: '/images/hackathonimg.png',
            title: 'Story Of My Life',
            description: 'A 2D top-down immersive language-learning game created using Unity, made within 36 hours in a team of 4 for UofTHacks13. Features Gemini, OpenRouter, and Elevenlabs api integration enabling smart translations and interactive conversations with npcs through tts and stt functionality.',
        },
    ]

    return (
        <section id="projects-section">
            <div style={{ height: '4rem' }}></div>
            <h2 className="header-2">projects</h2>
            <p className="body">here are some recent projects I have worked on<br/></p>
            <div id="projects-container">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.href}
                        id={project.id}
                        className="project"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={256}
                            height={256}
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <p className="body-smaller-bold">{project.title}</p>
                        <p className="body-smaller">{project.description}</p>
                    </a>
                ))}
            </div>
            <div className="row-flex">
                <p className="body">see more at:</p>
                <a href="https://github.com/amansdali" target="_blank" rel="noopener noreferrer">
                    <p className="link-text">github.com/amansdali</p>
                </a>
            </div>
            <p className="body">and here is some vector art I have done</p>
            <p className="body"> (scroll --&gt;) </p>
            <div id="artwork-container">
                <Image src="/svgs/portrait.svg" alt="vector art of a woman" width={300} height={300} className="art" />
                <Image src="/images/still_life.png" alt="vector art of a still life scene, as a png" width={300} height={300} className="art" />
                <Image src="/svgs/leaf.svg" alt="vector art of leaf" width={300} height={300} className="art" />
                <Image src="/svgs/card1.svg" alt="vector art of playing card" width={300} height={300} className="art" />
                <Image src="/svgs/card2.svg" alt="vector art of playing card" width={300} height={300} className="art" />
            </div>
            <div className="small-arrow-divider">
                <a href="#contact-section" aria-label="Navigate to contact section">
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
