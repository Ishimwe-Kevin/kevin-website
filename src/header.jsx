function Header() {  // Component name should be capitalized
    return (
        <>
            <nav className="navbar">
                <div className="logo">IK.</div>
                <ul className="nav-links">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
                <div className="social-links">
                    <a href="#" className="social-link">
                        <img src="https://img.icons8.com/ios-filled/24/000000/twitter.png" alt="Twitter" />
                    </a>
                    <a href="#" className="social-link">
                        <img src="https://img.icons8.com/ios-filled/24/000000/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Header;  // Export should match the component name