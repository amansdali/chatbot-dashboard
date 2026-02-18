export default function Contact(){
    return (
        <section id="contact-section">
            <div style={{ height: '15rem' }}></div>
            <h2 className="header-2">contact me</h2>
            <p className="body">feel free to reach out to me at</p>
            <div className="row-flex">
                <p className="body">email:</p>
                <a href="mailto:amandaj.li@mail.utoronto.ca">
                    <p className="link-text">amandaj.li@mail.utoronto.ca</p>
                </a>
            </div>
            <div className="row-flex">
                <p className="body">linkedin:</p>
                <a href="https://www.linkedin.com/in/amanda-jianing-li/" target="_blank" rel="noopener noreferrer">
                    <p className="link-text">linkedin.com/in/amanda-jianing-li</p>
                </a>
            </div>
            <div className="row-flex">
                <p className="body">phone:</p>
                <a href="tel:4165587720">
                    <p className="link-text">416-558-7720</p>
                </a>
            </div>
        </section>
    )
}