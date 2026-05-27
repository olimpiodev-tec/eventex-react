function Nav() {
    return (
        <div className="header-frame header-frame-absolute  row">
            <header className="header header-inline min-h-3 row desktop-12 container" role="banner">

                <div className="site-logo">
                    <h1><a href="/" rel="home">Eventex</a></h1>
                    <p className="site-description screen-reader-only">O maior encontro hacker do mundo!</p>
                </div>

                <nav className="nav-inline" role="navigation">
                    <a href="javascript:void(0);" className="nav-mobile"><i className="fa fa-bars"></i></a>
                    <ul>
                        <li><a data-scroll href="#overview">Conferência</a></li>
                        <li><a data-scroll href="palestras.html">Palestras</a></li>
                        <li><a data-scroll href="#speakers">Palestrantes</a></li>
                        <li><a data-scroll href="#sponsors">Patrocinadores</a></li>
                        <li><a data-scroll href="#register">Inscrição</a></li>
                        <li><a data-scroll href="#venue">Local</a></li>
                    </ul>
                </nav>

            </header>
        </div>
    );
}

export default Nav;