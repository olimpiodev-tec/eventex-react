import MenuItem from "./MenuItem";

function Nav() {
    return (
        <div className="header-frame header-frame-absolute  row">
            <header className="header header-inline min-h-3 row desktop-12 container" role="banner">

                <div className="site-logo">
                    <h1>
                        <a href="/" rel="home">Eventex</a>
                    </h1>
                    <p className="site-description screen-reader-only">O maior encontro hacker do mundo!</p>
                </div>

                <nav className="nav-inline" role="navigation">
                    <a href="javascript:void(0);" className="nav-mobile"><i className="fa fa-bars"></i></a>
                    
                    <MenuItem />
                    
                </nav>

            </header>
        </div>
    );
}

export default Nav;