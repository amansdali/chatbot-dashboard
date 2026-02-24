
import ThemeToggle from './ThemeToggle'


export default function Navbar() {
    return (
        <div id="navigation-divider">
            <nav className="navbar row-flex">
                <div className="nav-left">
                    <a href="www.amansda.tech" aria-label="Navigate to home page (main website)">
                        <div className="homepage-link">
                            <svg className="quack" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="m 44.999997,87.939712 c 24.651136,0 44.634857,-19.248315 44.634857,-42.992283 0,-23.743968 -19.983721,-42.9922836 -44.634857,-42.9922836 -24.651133,0 -44.63485083,19.2483156 -44.63485083,42.9922836 0,23.743968 19.98371783,42.992283 44.63485083,42.992283 z"
                                    className="icon-secondary"
                                    id="duckpath1"
                                />
                                <path
                                    id="duckpath2"
                                    d="m 75.068125,44.125749 c -1.743365,0.08077 -3.463871,1.423103 -10.083755,2.879054 -4.706188,1.035018 -7.45458,1.214348 -18.342678,0.598902 -7.259473,-0.410394 -13.756947,0.300019 -19.488667,2.097358 -4.42627,1.387874 -7.528396,7.661407 -8.884842,12.28109 -1.435511,6.661073 -1.302552,10.505184 -0.729473,12.901636 0.01297,0.05427 0.0406,0.109096 0.08514,0.163556 2.132382,6.897775 13.82249,13.2019 29.017833,12.99544 14.517503,-0.19725 25.645475,-8.440114 29.693897,-15.25895 2.168522,-4.053667 3.300573,-8.217205 3.687668,-11.426865 0.510515,-4.232427 1.801475,-13.837964 -3.003731,-16.747771 -0.737378,-0.459646 -1.370275,-0.510373 -1.951401,-0.48345 z"
                                    className="icon-primary"
                                />
                                <ellipse
                                    cx="38.65826"
                                    cy="37.718636"
                                    className="icon-primary"
                                    id="duckcircle3"
                                    rx="19.207424"
                                    ry="19.770243"
                                />
                                <path
                                    d="m 19.74193,37.718635 c -2.32811,1.497721 -9.719944,2.695948 -9.021594,6.290504 0.581938,2.995566 7.275541,5.0924 12.80491,5.0924 z"
                                    className="icon-primary"
                                    id="duckpath4"
                                />
                                <path
                                    d="m 35.372346,37.374459 c 0,2.249301 -0.837964,4.072801 -2.890295,4.072801 -2.052331,0 -2.890294,-1.8235 -2.890294,-4.072801 0,-2.249301 0.837963,-4.072801 2.890294,-4.072801 2.052331,0 2.890295,1.8235 2.890295,4.072801 z"
                                    className="icon-secondary"
                                    id="duckpath5"
                                />
                            </svg>
                            <h4 className="header-link">
                                <span className="navbar-username">amansda</span>
                            </h4>
                        </div>
                    </a>
                    <h4 className="header-4">/portfolio/</h4>
                </div>
                <div className="nav-right">
                    <a href="/portfolio">
                        <p className="body">home</p>
                    </a>
                    <a href="#about-section">
                        <p className="body">about</p>
                    </a>
                    <a href="#skills-section">
                        <p className="body">skills</p>
                    </a>
                    <a href="#projects-section">
                        <p className="body">projects</p>
                    </a>
                    <a href="#contact-section">
                        <p className="body">contact</p>
                    </a>
                    <ThemeToggle />
                </div>
            </nav>
        </div>
    )
}
