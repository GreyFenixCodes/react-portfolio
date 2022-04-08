import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 sticky-top">
        <div className="container ms-auto">
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                <a href="https://github.com/GreyFenixCodes" className="navbar-brand" target="_blank">GreyFenix.Codes</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
            </button>
                    <li className="nav-item">
                        <a href="#languages" className="nav-link">
                            Languages Used
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about_me" className="nav-link">
                            About the Dev
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">
                            Sample Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  );
}

export default Navbar