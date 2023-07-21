import { useEffect } from 'react';
import M from 'materialize-css'
import img1 from '../assets/parallax-image.jpg';

const Main = () => {

    useEffect(() => {
        const elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
    });

    return (
        <main>
            <div className="parallax-container">
                <div className="parallax"><img src={img1}></img></div>
                <div className="content">
                    <h1>Welcome to My Parallax Website</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>

            <div className="section">
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className="parallax-container">
                <div className="parallax"><img src={img1}></img></div>
                <div className="content">
                    <h2>Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </main>
    );

};

export default Main;
