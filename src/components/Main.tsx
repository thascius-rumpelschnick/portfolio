import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import { useEffect } from 'react';

import img1 from '../assets/parallax-image.jpg';
import img2 from '../assets/parallax-image2.jpg';

const Main = () => {

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        M.AutoInit();

        const elems = document.querySelectorAll('.parallax');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
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
                <div className="parallax"><img src={img2}></img></div>
                <div className="content">
                    <h2>Products</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </main>
    );

};

export default Main;
