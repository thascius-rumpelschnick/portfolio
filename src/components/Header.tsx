import { useEffect } from "react";
import M from 'materialize-css';

const Header = () => {

    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    });

    return (
        <header className="navbar-fixed">
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="index.html" className="brand-logo">Mediendesign 2<span className="hide-on-small-only"> - Portfolio</span></a>
                        <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#apple"><i className="material-symbols-sharp">nutrition</i></a></li>
                            <li><a href="#egg"><i className="material-symbols-sharp">egg_alt</i></a></li>
                            <li><a href="#contrast"><i className="material-symbols-sharp">contrast</i></a></li>
                            <li><a href="#album"><i className="material-symbols-sharp">album</i></a></li>
                            <li><a href="#video"><i className="material-symbols-sharp">movie</i></a></li>
                            <li><a href="#portfolio"><i className="material-symbols-sharp">captive_portal</i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-nav">
                <li className="center-align"><a href="#apple"><i className="material-symbols-sharp">nutrition</i></a></li>
                <li className="center-align"><a href="#egg"><i className="material-symbols-sharp">egg_alt</i></a></li>
                <li className="center-align"><a href="#contrast"><i className="material-symbols-sharp">contrast</i></a></li>
                <li className="center-align"><a href="#album"><i className="material-symbols-sharp">album</i></a></li>
                <li className="center-align"><a href="#video"><i className="material-symbols-sharp">movie</i></a></li>
                <li className="center-align"><a href="#portfolio"><i className="material-symbols-sharp">captive_portal</i></a></li>
            </ul>
        </header>
    );

};

export default Header;
