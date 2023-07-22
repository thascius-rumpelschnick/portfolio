import { useEffect } from 'react';
import M from 'materialize-css';

import apple_1 from '../assets/dsc_0200_edited.jpg';
import apple_2 from '../assets/dsc_0209_edited.jpg';
import apple_3 from '../assets/dsc_0212_edited.jpg';
import apple_4 from '../assets/dsc_0213_edited.jpg';
import apple_5 from '../assets/dsc_0215_edited.jpg';
import apple_6 from '../assets/dsc_0220_edited.jpg';

import contrast_1 from '../assets/dsc_0240.jpeg';
import contrast_2 from '../assets/dsc_0241.jpeg';
import contrast_3 from '../assets/dsc_0247.jpeg';
import contrast_4 from '../assets/dsc_0249.jpeg';
import contrast_5 from '../assets/dsc_0251.jpeg';
import contrast_6 from '../assets/dsc_0256.jpeg';
import contrast_7 from '../assets/dsc_0264.jpeg';
import contrast_8 from '../assets/dsc_0269.jpeg';
import contrast_9 from '../assets/dsc_0271.jpg';
import contrast_10 from '../assets/dsc_0272.jpeg';
import contrast_11 from '../assets/dsc_0277.jpg';
import contrast_12 from '../assets/dsc_0279.jpg';
import contrast_13 from '../assets/dsc_0282.jpg';
import contrast_14 from '../assets/dsc_0288.jpeg';
import contrast_15 from '../assets/dsc_0291.jpeg';
import contrast_16 from '../assets/dsc_0284.jpeg';
// import contrast_17 from '../assets/dsc_0309.jpeg';

import egg_1 from '../assets/DSC_0221_013.jpg';
import egg_2 from '../assets/DSC_0221_010.jpg';
import egg_3 from '../assets/DSC_0221_009.jpg';
import egg_4 from '../assets/DSC_0221_014.jpg';

import cover_front from '../assets/cover_front.jpg';
import cover_back from '../assets/cover_back.jpg';

import logo_animation from '../assets/logo-animation.jpg';
import video from '../assets/0001-0250.mp4';

const Main = () => {

    useEffect(() => {
        const elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);

        const carousel = document.querySelectorAll('.carousel');
        M.Carousel.init(carousel, { indicators: true, fullWidth: true });

        const box = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(box);
    });

    return (
        <main>
            <section className="parallax-container">
                <div className="parallax"><img src={apple_5}></img></div>
                <div className="container caption">
                    <h2 className='caption-text'>APFEL</h2>
                </div>
            </section>

            <section id="apple" className="container section">
                <div className="row">
                    <div className="col s12">
                        <h2>Der Apfel</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Den Apfel wie auch das Ei zu fotografieren war eine Herausforderung.
                            <span className="lighter-text">
                                Dafür habe ich mein Arbeitszimmer abgedunkelt und den Bereich um den Apfel mit einer Schreibtischlampe
                                ausgeleuchtet. Die Kamera war dabei fixiert und auf ein Stativ positioniert. Zudem habe ich mich
                                der Taschenlampe meines Smartphones bedient, um verschiedene Ausleuchtungen und die damit verbundenen
                                Effekte verwirklichen zu können.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <div className="carousel carousel-slider center">
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={apple_1} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={apple_2} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={apple_3} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={apple_4} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={apple_5} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={apple_6} /></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Es bedurfte jedoch der Nachbearbeitung.
                            <span className="lighter-text">
                                Ausleuchtung und Einstellungen meiner Kamera waren nicht optimal, sodass ich etwas mit der nachträglichen
                                Korrektur von Schärfe, Farbsättigung und Kontrast nachhelfen musste. Dadurch konnte der Apfel einerseits
                                "saftiger" aussehen oder aber auch "steriler" und "kälter" wirken. Als Kamera diente mir eine Nikon D5300.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="parallax-container">
                <div className="parallax"><img src={egg_1}></img></div>
                <div className="container caption">
                    <h2 className='caption-text'>EI</h2>
                </div>
            </section>

            <section id="egg" className="container section">
                <div className="row">
                    <div className="col s12">
                        <h2>Das Ei</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Das Ei stellte sich als noch größere Herausforderung dar.
                            <span className="lighter-text">
                                Für meine Nikon stand mir ein 18mm - 105mm VR Objektiv zur Verfügung. Für die von mir gewünschten
                                Anschnitte konnte ich bei den gegebenen Lichtverhältnissen nicht genug ranzoomen, ohne an Schärfe einzubüßen.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <div className="carousel carousel-slider center">
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={egg_1} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={egg_2} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={egg_3} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={egg_4} /></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Hier konnte ich dennoch die gewünschten Effekte aber mit der nachträglichen Beschneidung der Bilder herstellen.
                            <span className="lighter-text">
                                Dadurch sind einige schöne optische Verfremdungen entstanden, die ich so nicht geplant hatte. Das Rauschen ist aber auch deutlich
                                sichtbar. Dadurch wirken die Aufnahmen teilweise wie aus der gedruckten Tageszeitung. Auch ein interessanter Effekt.
                            </span>
                        </p>
                    </div>
                </div>

            </section>

            <section className="parallax-container">
                <div className="parallax"><img src={contrast_13}></img></div>
                <div className="container caption">
                    <h2 className='caption-text'>FARBKONTRASTE</h2>
                </div>
            </section>

            <section id="contrast" className="container section">
                <div className="row">
                    <div className="col s12">
                        <h2>Die Farbkontraste</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Es war ein schöner sonniger Tag und die Flora und Fauna am Engelbecken in voller Blütenpracht.
                            <span className="lighter-text">
                                Die Lichtverhältnisse waren optimal, um die Farbkontraste der Blüten und Blätter einzufangen. Auch gab es
                                viele unterschiedlich Kontraste einzufangen. Tolle räumliche Verläufe konnte ich ebenfalls einfangen. Darauf bin ich besonders stolz.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <div className="carousel carousel-slider center">
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_1} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_2} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_3} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_4} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_5} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_6} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_7} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_8} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_9} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_10} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_11} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_12} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_13} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_14} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_15} /></div>
                            <div className="carousel-item"><img className="materialboxed" width={"100%"} height={"100%"} src={contrast_16} /></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Die Örtlichkeit lieferte mir auch weitere Kontraste.
                            <span className="lighter-text">
                                Die Gegenüberstellung von Natur und Architektur, von Alt und Graffiti liefert weitere spannende Gegensätze,
                                die eine Metaebene eröffnen. Die Bilder sind nicht nur schön anzusehen, sondern regen eventuell auch zum Nachdenken an.
                            </span>
                        </p>
                    </div>
                </div>

            </section>

            <section className="parallax-container">
                <div className="parallax"><img src={cover_front}></img></div>
                <div className="container caption">
                    <h2 className="caption-text">ALBUM-COVER</h2>
                </div>
            </section>

            <section id="album" className="container section">
                <div className="row">
                    <div className="col s12">
                        <h2>Das Album-Cover</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Auch das Album-Cover steckt voller Kontraste.
                            <span className="lighter-text">
                                Die Idee hier war, etwas punkiges mit einem enormen Hauch von DIY-Ästhetik zu schaffen. Dabei erinnerte ich
                                mich an ein Foto aus einer Vorlesung, wo junge Menschen der Britischen Subkultur sich "We are the flowers in your dustbin"
                                auf die Stirn tättowiert hatten. Das wollte ich mit der kalten Ästehtik der Sozialbaueten der 80er Jahre kontrastieren.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m6">
                        <div className="card grey darken-2">
                            <div className="card-content white-text">
                                <span className="card-title">Album Vorderseite</span>
                                <p><img className="materialboxed" src={cover_front} width={"100%"} height={"auto"} alt="" /></p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6">
                        <div className="card grey darken-2">
                            <div className="card-content white-text">
                                <span className="card-title">Album Rückseite</span>
                                <p><img className="materialboxed" src={cover_back} width={"100%"} height={"auto"} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Alles musste in Schwarzweiss gehalten werden und "gegen den Strom" sein.
                            <span className="lighter-text">
                                Ich habe dafür auf Fotos aus dieser Zeit zurückgegriffen und diese mit Photoshop freigestellt. Der junge Mann steht dabei im Vordergrund,
                                aber ist nur zu Hälfte zu sehen. Der Schriftzug auf seiner Stirn wird durch die von mir gewählte Schrift
                                ergänzt. Diese wirkt durch den Hintergrund ein wenig wie der Union-Jack. Ich habe hier mit mehreren Ebenen und Transparenzen gearbeitet.
                            </span>
                        </p>
                        <p>
                            Die Albumrückseite zeigt dann einen dieser geraden, kalten, Betonsozialbauten.
                            <span className="lighter-text">
                                Die Songtitel sind in einer Schrift gehalten, die an die Graffiti erinnert. Die Schrift ist aber auch ein wenig "punkig" und "dreckig",
                                vor allem da sie in ihrer Anordnung mit den geraden Linien bricht. Auch ein Anarchie-Zeichen reinzumontieren, war ein kleiner Spaß.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="parallax-container">
                <div className="parallax"><img src={logo_animation}></img></div>
                <div className="container caption">
                    <h2 className="caption-text">LOGO-ANIMATION</h2>
                </div>
            </section>

            <section id="video" className="container section">
                <div className="row">
                    <div className="col s12">
                        <h2>Die Logo-Animation</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Auf Punk folgen die blumigen Triebe des kreativen Proletariats.
                            <span className="lighter-text">
                                Die Logo-Animation habe ich mit Blender und der Hilfe eines Freundes erstellt. Dabei wird der Name der
                                Produktionsfirma als Text-Logo dargestellt. Die einzeln Buchstaben fliegen ins Bild hinein und setzen sich am Ende
                                zu dem Namen zusammen. Das hat Schmackes und ist "in your face". Genau wie die Filme von Uwe Boll. Und die sind
                                alle ausnahmslos "A-Rate Pictures" - cineastische Meisterwerke allerfeinster Güte.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <video width={"100%"} height={"auto"} controls>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Die Mischung aus professionell, aber auch zu dick aufgetragen - durch die Wahl der Farbe und der Letters -
                            zeigt hier seinen Charme.
                            <span className="lighter-text">
                                Zumindest bei meiner imaginiären Produktionsfirma "A-Rate Pictures", die alle Uwe-Boll-Fans der Galaxie auch dieses
                                Jahrhundert glücklich machen wird, da sie einen Blockbuster nach dem Nächsten raushaut. Für eine klangliche Untermalung
                                hat dann aber das Budget nicht mehr ausgereicht. Uwe fühlt mit uns.
                            </span>
                        </p>
                    </div>
                </div>

            </section>

            <section className="parallax-container">
                <div className="parallax"><img src={contrast_15}></img></div>
                <div className="container caption">
                    <h2 className="caption-text">WEB-PORTFOLIO</h2>
                </div>
            </section>

            <section id="portfolio" className="container section">
                <div className="row">
                    <div className="col s12">
                        <h2>Das Web-Portfolio</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <p>
                            Inspiration für das Web-Portfolie waren die Großen: Apple und Google.
                            <span className="lighter-text">
                                Diese haben ein ganz sachlich nüchternes Design, mit dem ich aber durch die vielen Texte breche.
                                Ich habe mich hier auf drei oder vier Grau-Töne in den Farben beschränkt, die sowohl für Schrift und Hinteründe
                                benutzt werden. Außerdem kommen zwei Schriftarten von Google zum Einsatz. Die eine ist die "Kanit", serifenlos und für alle
                                Überschriften verwendet, die andere "Lora" mit Serifen für den restlichen Fließtext. Google und Apple verwenden einen
                                Mix aus dunklerem und hellerem Text in Absätzen. Das macht einen sachlichen wie reizvollen Eindruck, mit einfachen Mitteln
                                erzeugt.
                            </span>
                        </p>
                    </div>

                    <div className="col s12">
                        <p>
                            Ein Parallax-Effekt sorgt für eine schöne visuelle Auflockerung.
                            <span className="lighter-text">
                                Für die Umsetzung der Webseite habe ich auf Materialize zurückgegriffen, da dieses leichte Frontendframework
                                mir nützliche Tools wie ein Carousel, Lightbox, Cards mitgibt und außerdem responsiv ist, sodass die Seite
                                auch mobil funktioniert. Materialize folg dabei dem Material-Design von Google.
                            </span>
                        </p>
                    </div>

                    <div className="col s12">
                        <p>
                            Ich habe dabei einzelne Elemente von Materialize angepasst, sodass sie auf mein Design passen.
                            <span className="lighter-text">
                                So geschehen bei Farbpaletten und Schriftgrößen für Überschriften und Fließtext. Die Seite ist zudem mit React gebaut.
                                Durch die Beschränkungen macht sie einen professionellen Eindruck und wirkt durch die bereitgestellten Elemente
                                zudem modern.
                            </span>
                        </p>
                    </div>
                </div>


            </section>
        </main>
    );

};

export default Main;
